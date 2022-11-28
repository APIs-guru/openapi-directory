import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Databases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * queryADatabase - Query a database
     *
     * Query a database
    **/
    queryADatabase(req: operations.QueryADatabaseRequest, config?: AxiosRequestConfig): Promise<operations.QueryADatabaseResponse>;
    /**
     * retrieveADatabase - Retrieve a database
     *
     * Retrieves a database object using the ID specified in the request path.
    **/
    retrieveADatabase(req: operations.RetrieveADatabaseRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveADatabaseResponse>;
    /**
     * updateADatabase - Update a database
     *
     * Update a database
    **/
    updateADatabase(req: operations.UpdateADatabaseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateADatabaseResponse>;
}
