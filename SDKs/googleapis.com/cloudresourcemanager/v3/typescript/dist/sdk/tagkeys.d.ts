import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TagKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudresourcemanagerTagKeysCreate - Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
    **/
    cloudresourcemanagerTagKeysCreate(req: operations.CloudresourcemanagerTagKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagKeysCreateResponse>;
    /**
     * cloudresourcemanagerTagKeysList - Lists all TagKeys for a parent resource.
    **/
    cloudresourcemanagerTagKeysList(req: operations.CloudresourcemanagerTagKeysListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagKeysListResponse>;
}
