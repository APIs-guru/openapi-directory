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
    IdeahubPlatformsPropertiesIdeaActivitiesCreate(req: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse>;
    IdeahubPlatformsPropertiesIdeasList(req: operations.IdeahubPlatformsPropertiesIdeasListRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesIdeasListResponse>;
    IdeahubPlatformsPropertiesLocalesList(req: operations.IdeahubPlatformsPropertiesLocalesListRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesLocalesListResponse>;
    IdeahubPlatformsPropertiesTopicStatesPatch(req: operations.IdeahubPlatformsPropertiesTopicStatesPatchRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse>;
}
export {};
