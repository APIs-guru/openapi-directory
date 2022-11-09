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
    ClouderrorreportingProjectsDeleteEvents(req: operations.ClouderrorreportingProjectsDeleteEventsRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsDeleteEventsResponse>;
    ClouderrorreportingProjectsEventsList(req: operations.ClouderrorreportingProjectsEventsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsEventsListResponse>;
    ClouderrorreportingProjectsEventsReport(req: operations.ClouderrorreportingProjectsEventsReportRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsEventsReportResponse>;
    ClouderrorreportingProjectsGroupStatsList(req: operations.ClouderrorreportingProjectsGroupStatsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsGroupStatsListResponse>;
    ClouderrorreportingProjectsGroupsGet(req: operations.ClouderrorreportingProjectsGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsGroupsGetResponse>;
    ClouderrorreportingProjectsGroupsUpdate(req: operations.ClouderrorreportingProjectsGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ClouderrorreportingProjectsGroupsUpdateResponse>;
}
export {};
