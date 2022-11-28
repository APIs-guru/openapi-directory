import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Operations {
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
   * cloudprivatecatalogproducerOperationsCancel - Starts asynchronous cancellation on a long-running operation.  The server
   * makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
   * Operations.GetOperation or
   * other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation,
   * the operation is not deleted; instead, it becomes an operation with
   * an Operation.error value with a google.rpc.Status.code of 1,
   * corresponding to `Code.CANCELLED`.
  **/
  cloudprivatecatalogproducerOperationsCancel(
    req: operations.CloudprivatecatalogproducerOperationsCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudprivatecatalogproducerOperationsCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudprivatecatalogproducerOperationsCancelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1beta1/{name}:cancel", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CloudprivatecatalogproducerOperationsCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cloudprivatecatalogproducerOperationsList - Lists operations that match the specified filter in the request. If the
   * server doesn't support this method, it returns `UNIMPLEMENTED`.
   * 
   * NOTE: the `name` binding allows API services to override the binding
   * to use different resource name schemes, such as `users/* /operations`. To
   * override the binding, API services can add a binding such as
   * `"/v1/{name=users/*}/operations"` to their service configuration.
   * For backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding
   * is the parent resource, without the operations collection id.
  **/
  cloudprivatecatalogproducerOperationsList(
    req: operations.CloudprivatecatalogproducerOperationsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloudprivatecatalogproducerOperationsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloudprivatecatalogproducerOperationsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1beta1/operations";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.CloudprivatecatalogproducerOperationsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
