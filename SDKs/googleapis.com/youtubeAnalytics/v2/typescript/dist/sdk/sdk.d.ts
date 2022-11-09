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
    YoutubeAnalyticsGroupItemsDelete(req: operations.YoutubeAnalyticsGroupItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsDeleteResponse>;
    YoutubeAnalyticsGroupItemsInsert(req: operations.YoutubeAnalyticsGroupItemsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsInsertResponse>;
    YoutubeAnalyticsGroupItemsList(req: operations.YoutubeAnalyticsGroupItemsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupItemsListResponse>;
    YoutubeAnalyticsGroupsDelete(req: operations.YoutubeAnalyticsGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsDeleteResponse>;
    YoutubeAnalyticsGroupsInsert(req: operations.YoutubeAnalyticsGroupsInsertRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsInsertResponse>;
    YoutubeAnalyticsGroupsList(req: operations.YoutubeAnalyticsGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsListResponse>;
    YoutubeAnalyticsGroupsUpdate(req: operations.YoutubeAnalyticsGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsGroupsUpdateResponse>;
    YoutubeAnalyticsReportsQuery(req: operations.YoutubeAnalyticsReportsQueryRequest, config?: AxiosRequestConfig): Promise<operations.YoutubeAnalyticsReportsQueryResponse>;
}
export {};
