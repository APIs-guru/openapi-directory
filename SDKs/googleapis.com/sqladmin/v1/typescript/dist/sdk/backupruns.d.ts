import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BackupRuns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sqlBackupRunsDelete - Deletes the backup taken by a backup run.
    **/
    sqlBackupRunsDelete(req: operations.SqlBackupRunsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsDeleteResponse>;
    /**
     * sqlBackupRunsGet - Retrieves a resource containing information about a backup run.
    **/
    sqlBackupRunsGet(req: operations.SqlBackupRunsGetRequest, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsGetResponse>;
    /**
     * sqlBackupRunsInsert - Creates a new backup run on demand.
    **/
    sqlBackupRunsInsert(req: operations.SqlBackupRunsInsertRequest, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsInsertResponse>;
    /**
     * sqlBackupRunsList - Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
    **/
    sqlBackupRunsList(req: operations.SqlBackupRunsListRequest, config?: AxiosRequestConfig): Promise<operations.SqlBackupRunsListResponse>;
}
