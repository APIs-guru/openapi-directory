import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * storageChannelsStop - Stop watching resources through this channel
    **/
    storageChannelsStop(req: operations.StorageChannelsStopRequest, config?: AxiosRequestConfig): Promise<operations.StorageChannelsStopResponse>;
}
