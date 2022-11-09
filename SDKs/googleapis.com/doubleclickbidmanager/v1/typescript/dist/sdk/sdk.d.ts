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
    DoubleclickbidmanagerQueriesCreatequery(req: operations.DoubleclickbidmanagerQueriesCreatequeryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesCreatequeryResponse>;
    DoubleclickbidmanagerQueriesDeletequery(req: operations.DoubleclickbidmanagerQueriesDeletequeryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesDeletequeryResponse>;
    DoubleclickbidmanagerQueriesGetquery(req: operations.DoubleclickbidmanagerQueriesGetqueryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesGetqueryResponse>;
    DoubleclickbidmanagerQueriesListqueries(req: operations.DoubleclickbidmanagerQueriesListqueriesRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesListqueriesResponse>;
    DoubleclickbidmanagerQueriesRunquery(req: operations.DoubleclickbidmanagerQueriesRunqueryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesRunqueryResponse>;
    DoubleclickbidmanagerReportsListreports(req: operations.DoubleclickbidmanagerReportsListreportsRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerReportsListreportsResponse>;
}
export {};
