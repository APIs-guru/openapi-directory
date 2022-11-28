import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Topics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pubsubTopicsCreate - Creates the given topic with the given name.
    **/
    pubsubTopicsCreate(req: operations.PubsubTopicsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsCreateResponse>;
    /**
     * pubsubTopicsDelete - Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
    **/
    pubsubTopicsDelete(req: operations.PubsubTopicsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsDeleteResponse>;
    /**
     * pubsubTopicsGet - Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
    **/
    pubsubTopicsGet(req: operations.PubsubTopicsGetRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsGetResponse>;
    /**
     * pubsubTopicsList - Lists matching topics.
    **/
    pubsubTopicsList(req: operations.PubsubTopicsListRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsListResponse>;
    /**
     * pubsubTopicsPublish - Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
    **/
    pubsubTopicsPublish(req: operations.PubsubTopicsPublishRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsPublishResponse>;
    /**
     * pubsubTopicsPublishBatch - Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
    **/
    pubsubTopicsPublishBatch(req: operations.PubsubTopicsPublishBatchRequest, config?: AxiosRequestConfig): Promise<operations.PubsubTopicsPublishBatchResponse>;
}
