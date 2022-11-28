import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class VoiceConversion {
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
   * voiceConversion - Tell Nexmo if your voice call was successful
   *
   * Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.
  **/
  voiceConversion(
    req: operations.VoiceConversionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VoiceConversionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VoiceConversionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/voice";
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.VoiceConversionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 402:
            break;
          case httpRes?.status == 420:
            break;
          case httpRes?.status == 423:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
