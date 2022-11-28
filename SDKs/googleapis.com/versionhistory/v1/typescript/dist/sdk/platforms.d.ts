import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Platforms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * versionhistoryPlatformsChannelsList - Returns list of channels that are available for a given platform.
    **/
    versionhistoryPlatformsChannelsList(req: operations.VersionhistoryPlatformsChannelsListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsChannelsListResponse>;
    /**
     * versionhistoryPlatformsChannelsVersionsList - Returns list of version for the given platform/channel.
    **/
    versionhistoryPlatformsChannelsVersionsList(req: operations.VersionhistoryPlatformsChannelsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsChannelsVersionsListResponse>;
    /**
     * versionhistoryPlatformsChannelsVersionsReleasesList - Returns list of releases of the given version.
    **/
    versionhistoryPlatformsChannelsVersionsReleasesList(req: operations.VersionhistoryPlatformsChannelsVersionsReleasesListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsChannelsVersionsReleasesListResponse>;
    /**
     * versionhistoryPlatformsList - Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.
    **/
    versionhistoryPlatformsList(req: operations.VersionhistoryPlatformsListRequest, config?: AxiosRequestConfig): Promise<operations.VersionhistoryPlatformsListResponse>;
}
