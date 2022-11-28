import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class IsochroneApi {
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
   * getIsochrone - Isochrone Endpoint
   *
   * ### Example
   * You can get an example response via:
   * 
   * ```
   * curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
   * ```
   * 
   * Don't forget to replace the placeholder with your own key.
   * 
   * ### Introduction
   * ![Isochrone screenshot](./img/isochrone-example.png)
   * 
   * An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
   * With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
   * 
   * ### Use Cases
   * Some possible areas in which this API may be useful to you:
   * 
   * - real estate analysis
   * - realtors
   * - vehicle scheduling
   * - geomarketing
   * - reach of electric vehicles
   * - transport planning
   * - logistics (distribution and retail network planning)
   * 
   * ### API Clients and Examples
   * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
   * 
  **/
  getIsochrone(
    req: operations.GetIsochroneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetIsochroneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetIsochroneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/isochrone";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetIsochroneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.isochroneResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ghError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
