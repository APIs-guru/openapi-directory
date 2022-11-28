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
     * sqlDatabasesDelete - Deletes a database from a Cloud SQL instance.
    **/
    sqlDatabasesDelete(req: operations.SqlDatabasesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesDeleteResponse>;
    /**
     * sqlDatabasesGet - Retrieves a resource containing information about a database inside a Cloud SQL instance.
    **/
    sqlDatabasesGet(req: operations.SqlDatabasesGetRequest, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesGetResponse>;
    /**
     * sqlDatabasesInsert - Inserts a resource containing information about a database inside a Cloud SQL instance.
    **/
    sqlDatabasesInsert(req: operations.SqlDatabasesInsertRequest, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesInsertResponse>;
    /**
     * sqlDatabasesList - Lists databases in the specified Cloud SQL instance.
    **/
    sqlDatabasesList(req: operations.SqlDatabasesListRequest, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesListResponse>;
    /**
     * sqlDatabasesPatch - Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
    **/
    sqlDatabasesPatch(req: operations.SqlDatabasesPatchRequest, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesPatchResponse>;
    /**
     * sqlDatabasesUpdate - Updates a resource containing information about a database inside a Cloud SQL instance.
    **/
    sqlDatabasesUpdate(req: operations.SqlDatabasesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SqlDatabasesUpdateResponse>;
}
