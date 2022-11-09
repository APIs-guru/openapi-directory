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
    PlusActivitiesGet(req: operations.PlusActivitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesGetResponse>;
    PlusActivitiesList(req: operations.PlusActivitiesListRequest, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesListResponse>;
    PlusActivitiesSearch(req: operations.PlusActivitiesSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesSearchResponse>;
    PlusCommentsGet(req: operations.PlusCommentsGetRequest, config?: AxiosRequestConfig): Promise<operations.PlusCommentsGetResponse>;
    PlusCommentsList(req: operations.PlusCommentsListRequest, config?: AxiosRequestConfig): Promise<operations.PlusCommentsListResponse>;
    PlusPeopleGet(req: operations.PlusPeopleGetRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleGetResponse>;
    PlusPeopleList(req: operations.PlusPeopleListRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleListResponse>;
    PlusPeopleListByActivity(req: operations.PlusPeopleListByActivityRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleListByActivityResponse>;
    PlusPeopleSearch(req: operations.PlusPeopleSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleSearchResponse>;
}
export {};
