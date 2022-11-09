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
    SearchconsoleUrlInspectionIndexInspect(req: operations.SearchconsoleUrlInspectionIndexInspectRequest, config?: AxiosRequestConfig): Promise<operations.SearchconsoleUrlInspectionIndexInspectResponse>;
    SearchconsoleUrlTestingToolsMobileFriendlyTestRun(req: operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest, config?: AxiosRequestConfig): Promise<operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse>;
    WebmastersSearchanalyticsQuery(req: operations.WebmastersSearchanalyticsQueryRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSearchanalyticsQueryResponse>;
    WebmastersSitemapsDelete(req: operations.WebmastersSitemapsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsDeleteResponse>;
    WebmastersSitemapsGet(req: operations.WebmastersSitemapsGetRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsGetResponse>;
    WebmastersSitemapsList(req: operations.WebmastersSitemapsListRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsListResponse>;
    WebmastersSitemapsSubmit(req: operations.WebmastersSitemapsSubmitRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsSubmitResponse>;
    WebmastersSitesAdd(req: operations.WebmastersSitesAddRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesAddResponse>;
    WebmastersSitesDelete(req: operations.WebmastersSitesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesDeleteResponse>;
    WebmastersSitesGet(req: operations.WebmastersSitesGetRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesGetResponse>;
    WebmastersSitesList(req: operations.WebmastersSitesListRequest, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesListResponse>;
}
export {};
