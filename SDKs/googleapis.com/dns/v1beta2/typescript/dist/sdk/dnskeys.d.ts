import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DnsKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsDnsKeysGet - Fetches the representation of an existing DnsKey.
    **/
    dnsDnsKeysGet(req: operations.DnsDnsKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsDnsKeysGetResponse>;
    /**
     * dnsDnsKeysList - Enumerates DnsKeys to a ResourceRecordSet collection.
    **/
    dnsDnsKeysList(req: operations.DnsDnsKeysListRequest, config?: AxiosRequestConfig): Promise<operations.DnsDnsKeysListResponse>;
}
