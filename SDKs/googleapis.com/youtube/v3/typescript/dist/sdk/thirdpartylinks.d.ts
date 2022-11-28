import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ThirdPartyLinks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeThirdPartyLinksDelete - Deletes a resource.
    **/
    youtubeThirdPartyLinksDelete(req: operations.YoutubeThirdPartyLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksDeleteResponse>;
    /**
     * youtubeThirdPartyLinksInsert - Inserts a new resource into this collection.
    **/
    youtubeThirdPartyLinksInsert(req: operations.YoutubeThirdPartyLinksInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksInsertResponse>;
    /**
     * youtubeThirdPartyLinksList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeThirdPartyLinksList(req: operations.YoutubeThirdPartyLinksListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksListResponse>;
    /**
     * youtubeThirdPartyLinksUpdate - Updates an existing resource.
    **/
    youtubeThirdPartyLinksUpdate(req: operations.YoutubeThirdPartyLinksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeThirdPartyLinksUpdateResponse>;
}
