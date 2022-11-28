import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloodlightGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoFloodlightGroupsGet - Gets a Floodlight group.
    **/
    displayvideoFloodlightGroupsGet(req: operations.DisplayvideoFloodlightGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoFloodlightGroupsGetResponse>;
}
