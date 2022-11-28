import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chromepolicyMediaUpload - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
    **/
    chromepolicyMediaUpload(req: operations.ChromepolicyMediaUploadRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyMediaUploadResponse>;
}
