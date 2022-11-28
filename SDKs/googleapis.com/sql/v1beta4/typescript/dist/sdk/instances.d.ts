import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Instances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sqlInstancesAddServerCa - Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
    **/
    sqlInstancesAddServerCa(req: operations.SqlInstancesAddServerCaRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesAddServerCaResponse>;
    /**
     * sqlInstancesClone - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
    **/
    sqlInstancesClone(req: operations.SqlInstancesCloneRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesCloneResponse>;
    /**
     * sqlInstancesDelete - Deletes a Cloud SQL instance.
    **/
    sqlInstancesDelete(req: operations.SqlInstancesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesDeleteResponse>;
    /**
     * sqlInstancesDemoteMaster - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
    **/
    sqlInstancesDemoteMaster(req: operations.SqlInstancesDemoteMasterRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesDemoteMasterResponse>;
    /**
     * sqlInstancesExport - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
    **/
    sqlInstancesExport(req: operations.SqlInstancesExportRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesExportResponse>;
    /**
     * sqlInstancesFailover - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
    **/
    sqlInstancesFailover(req: operations.SqlInstancesFailoverRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesFailoverResponse>;
    /**
     * sqlInstancesGet - Retrieves a resource containing information about a Cloud SQL instance.
    **/
    sqlInstancesGet(req: operations.SqlInstancesGetRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesGetResponse>;
    /**
     * sqlInstancesImport - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
    **/
    sqlInstancesImport(req: operations.SqlInstancesImportRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesImportResponse>;
    /**
     * sqlInstancesInsert - Creates a new Cloud SQL instance.
    **/
    sqlInstancesInsert(req: operations.SqlInstancesInsertRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesInsertResponse>;
    /**
     * sqlInstancesList - Lists instances under a given project.
    **/
    sqlInstancesList(req: operations.SqlInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesListResponse>;
    /**
     * sqlInstancesListServerCas - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
    **/
    sqlInstancesListServerCas(req: operations.SqlInstancesListServerCasRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesListServerCasResponse>;
    /**
     * sqlInstancesPatch - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
    **/
    sqlInstancesPatch(req: operations.SqlInstancesPatchRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesPatchResponse>;
    /**
     * sqlInstancesPromoteReplica - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
    **/
    sqlInstancesPromoteReplica(req: operations.SqlInstancesPromoteReplicaRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesPromoteReplicaResponse>;
    /**
     * sqlInstancesResetSslConfig - Deletes all client certificates and generates a new server SSL certificate for the instance.
    **/
    sqlInstancesResetSslConfig(req: operations.SqlInstancesResetSslConfigRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesResetSslConfigResponse>;
    /**
     * sqlInstancesRestart - Restarts a Cloud SQL instance.
    **/
    sqlInstancesRestart(req: operations.SqlInstancesRestartRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesRestartResponse>;
    /**
     * sqlInstancesRestoreBackup - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
    **/
    sqlInstancesRestoreBackup(req: operations.SqlInstancesRestoreBackupRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesRestoreBackupResponse>;
    /**
     * sqlInstancesRotateServerCa - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
    **/
    sqlInstancesRotateServerCa(req: operations.SqlInstancesRotateServerCaRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesRotateServerCaResponse>;
    /**
     * sqlInstancesStartReplica - Starts the replication in the read replica instance.
    **/
    sqlInstancesStartReplica(req: operations.SqlInstancesStartReplicaRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesStartReplicaResponse>;
    /**
     * sqlInstancesStopReplica - Stops the replication in the read replica instance.
    **/
    sqlInstancesStopReplica(req: operations.SqlInstancesStopReplicaRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesStopReplicaResponse>;
    /**
     * sqlInstancesTruncateLog - Truncate MySQL general and slow query log tables MySQL only.
    **/
    sqlInstancesTruncateLog(req: operations.SqlInstancesTruncateLogRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesTruncateLogResponse>;
    /**
     * sqlInstancesUpdate - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
    **/
    sqlInstancesUpdate(req: operations.SqlInstancesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SqlInstancesUpdateResponse>;
}
