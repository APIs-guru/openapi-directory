import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Pipelines {
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
   * genomicsPipelinesRun - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa
  **/
  genomicsPipelinesRun(
    req: operations.GenomicsPipelinesRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenomicsPipelinesRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenomicsPipelinesRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2alpha1/pipelines:run";

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
        const res: operations.GenomicsPipelinesRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
