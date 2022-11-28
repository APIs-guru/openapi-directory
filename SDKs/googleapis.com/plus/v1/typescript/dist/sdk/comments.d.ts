import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * plusCommentsGet - Shut down. See https://developers.google.com/+/api-shutdown for more details.
    **/
    plusCommentsGet(req: operations.PlusCommentsGetRequest, config?: AxiosRequestConfig): Promise<operations.PlusCommentsGetResponse>;
    /**
     * plusCommentsList - Shut down. See https://developers.google.com/+/api-shutdown for more details.
    **/
    plusCommentsList(req: operations.PlusCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.PlusCommentsListResponse>;
}
