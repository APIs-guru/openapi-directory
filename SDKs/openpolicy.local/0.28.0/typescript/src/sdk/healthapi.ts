import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class HealthApi {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getHealth - Health
   *
   * This API endpoint verifies that the server is operational.
   * 
   * The response from the server is either 200 or 500:
   * - **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
   * - **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.
   * 
   * ---
   * **Note**
   * This check is only for initial bundle activation. Subsequent downloads will not affect the health check.
   * 
   * Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.
   * 
   * ---
   *
   * https://www.openpolicyagent.org/docs/latest/management/#bundles - Bundles
  **/
  getHealth(
    req: operations.GetHealthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHealthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHealthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/health";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHealthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
