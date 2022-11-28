import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Queries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * doubleclickbidmanagerQueriesCreate - Creates a query.
    **/
    doubleclickbidmanagerQueriesCreate(req: operations.DoubleclickbidmanagerQueriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesCreateResponse>;
    /**
     * doubleclickbidmanagerQueriesDelete - Deletes a query as well as the associated reports.
    **/
    doubleclickbidmanagerQueriesDelete(req: operations.DoubleclickbidmanagerQueriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesDeleteResponse>;
    /**
     * doubleclickbidmanagerQueriesGet - Retrieves a query.
    **/
    doubleclickbidmanagerQueriesGet(req: operations.DoubleclickbidmanagerQueriesGetRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesGetResponse>;
    /**
     * doubleclickbidmanagerQueriesList - Lists queries created by the current user.
    **/
    doubleclickbidmanagerQueriesList(req: operations.DoubleclickbidmanagerQueriesListRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesListResponse>;
    /**
     * doubleclickbidmanagerQueriesReportsGet - Retrieves a report.
    **/
    doubleclickbidmanagerQueriesReportsGet(req: operations.DoubleclickbidmanagerQueriesReportsGetRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesReportsGetResponse>;
    /**
     * doubleclickbidmanagerQueriesReportsList - Lists reports associated with a query.
    **/
    doubleclickbidmanagerQueriesReportsList(req: operations.DoubleclickbidmanagerQueriesReportsListRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesReportsListResponse>;
    /**
     * doubleclickbidmanagerQueriesRun - Runs a stored query to generate a report.
    **/
    doubleclickbidmanagerQueriesRun(req: operations.DoubleclickbidmanagerQueriesRunRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesRunResponse>;
}
