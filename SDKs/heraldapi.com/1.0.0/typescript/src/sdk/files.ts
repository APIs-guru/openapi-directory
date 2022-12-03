import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Files {
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
   * getFilesFileId - /files/{file_id}
   *
   * ### Get details for a file.
   * 
   * Retrieve the metadata for an individual file.
  **/
  getFilesFileId(
    req: operations.GetFilesFileIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilesFileIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilesFileIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/files/{file_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFilesFileIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getFilesFileId200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getFilesFileId400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getFilesFileId404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postFilesFileIdGetTemporaryLink - /files/{file_id}/get_temporary_link
   *
   * ### Get a temporary link to stream the contents of a file
   * 
   * Generates and returns a temporary link to access the content of a file that expires in 15 minutes. The Content-Type of the link is determined automatically by the file's format.
   * 
   * <!-- theme: info -->
   * 
   * > #### The Link URL should not be displayed on your front-end
   * > Since these links are temporary, Herald encourages you to not display the URL on your front end.
  **/
  postFilesFileIdGetTemporaryLink(
    req: operations.PostFilesFileIdGetTemporaryLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostFilesFileIdGetTemporaryLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostFilesFileIdGetTemporaryLinkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/files/{file_id}/get_temporary_link", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostFilesFileIdGetTemporaryLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postFilesFileIdGetTemporaryLink200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postFilesFileIdGetTemporaryLink400ApplicationJsonObject = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.postFilesFileIdGetTemporaryLink404ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
