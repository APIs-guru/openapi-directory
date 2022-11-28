import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Members {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeMembersList - Retrieves a list of members that match the request criteria for a channel.
    **/
    youtubeMembersList(req: operations.YoutubeMembersListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeMembersListResponse>;
}
