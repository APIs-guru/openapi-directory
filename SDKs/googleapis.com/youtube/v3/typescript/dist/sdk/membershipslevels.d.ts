import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MembershipsLevels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeMembershipsLevelsList - Retrieves a list of all pricing levels offered by a creator to the fans.
    **/
    youtubeMembershipsLevelsList(req: operations.YoutubeMembershipsLevelsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeMembershipsLevelsListResponse>;
}
