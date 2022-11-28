import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelSections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * youtubeChannelSectionsDelete - Deletes a resource.
    **/
    youtubeChannelSectionsDelete(req: operations.YoutubeChannelSectionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsDeleteResponse>;
    /**
     * youtubeChannelSectionsInsert - Inserts a new resource into this collection.
    **/
    youtubeChannelSectionsInsert(req: operations.YoutubeChannelSectionsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsInsertResponse>;
    /**
     * youtubeChannelSectionsList - Retrieves a list of resources, possibly filtered.
    **/
    youtubeChannelSectionsList(req: operations.YoutubeChannelSectionsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsListResponse>;
    /**
     * youtubeChannelSectionsUpdate - Updates an existing resource.
    **/
    youtubeChannelSectionsUpdate(req: operations.YoutubeChannelSectionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsUpdateResponse>;
}
