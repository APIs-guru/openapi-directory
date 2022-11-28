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
     * doubleclickbidmanagerQueriesCreatequery - Creates a query.
    **/
    doubleclickbidmanagerQueriesCreatequery(req: operations.DoubleclickbidmanagerQueriesCreatequeryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesCreatequeryResponse>;
    /**
     * doubleclickbidmanagerQueriesDeletequery - Deletes a stored query as well as the associated stored reports.
    **/
    doubleclickbidmanagerQueriesDeletequery(req: operations.DoubleclickbidmanagerQueriesDeletequeryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesDeletequeryResponse>;
    /**
     * doubleclickbidmanagerQueriesGetquery - Retrieves a stored query.
    **/
    doubleclickbidmanagerQueriesGetquery(req: operations.DoubleclickbidmanagerQueriesGetqueryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesGetqueryResponse>;
    /**
     * doubleclickbidmanagerQueriesListqueries - Retrieves stored queries.
    **/
    doubleclickbidmanagerQueriesListqueries(req: operations.DoubleclickbidmanagerQueriesListqueriesRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesListqueriesResponse>;
    /**
     * doubleclickbidmanagerQueriesRunquery - Runs a stored query to generate a report.
    **/
    doubleclickbidmanagerQueriesRunquery(req: operations.DoubleclickbidmanagerQueriesRunqueryRequest, config?: AxiosRequestConfig): Promise<operations.DoubleclickbidmanagerQueriesRunqueryResponse>;
}
