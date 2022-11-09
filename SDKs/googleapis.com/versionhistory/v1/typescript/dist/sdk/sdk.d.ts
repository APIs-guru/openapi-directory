import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    VersionhistoryPlatformsChannelsList(req: operations.VersionhistoryPlatformsChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsChannelsListResponse>;
    VersionhistoryPlatformsChannelsVersionsList(req: operations.VersionhistoryPlatformsChannelsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsChannelsVersionsListResponse>;
    VersionhistoryPlatformsChannelsVersionsReleasesList(req: operations.VersionhistoryPlatformsChannelsVersionsReleasesListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsChannelsVersionsReleasesListResponse>;
    VersionhistoryPlatformsList(req: operations.VersionhistoryPlatformsListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsListResponse>;
}
export {};
