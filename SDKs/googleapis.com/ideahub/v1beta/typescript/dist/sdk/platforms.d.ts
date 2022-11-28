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
     * ideahubPlatformsPropertiesIdeaActivitiesCreate - Creates an idea activity entry.
    **/
    ideahubPlatformsPropertiesIdeaActivitiesCreate(req: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse>;
    /**
     * ideahubPlatformsPropertiesIdeasList - List ideas for a given Creator and filter and sort options.
    **/
    ideahubPlatformsPropertiesIdeasList(req: operations.IdeahubPlatformsPropertiesIdeasListRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesIdeasListResponse>;
    /**
     * ideahubPlatformsPropertiesLocalesList - Returns which locales ideas are available in for a given Creator.
    **/
    ideahubPlatformsPropertiesLocalesList(req: operations.IdeahubPlatformsPropertiesLocalesListRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesLocalesListResponse>;
    /**
     * ideahubPlatformsPropertiesTopicStatesPatch - Update a topic state resource.
    **/
    ideahubPlatformsPropertiesTopicStatesPatch(req: operations.IdeahubPlatformsPropertiesTopicStatesPatchRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse>;
}
