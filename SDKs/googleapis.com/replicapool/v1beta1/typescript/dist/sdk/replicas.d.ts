import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Replicas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * replicapoolReplicasDelete - Deletes a replica from the pool.
    **/
    replicapoolReplicasDelete(req: operations.ReplicapoolReplicasDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasDeleteResponse>;
    /**
     * replicapoolReplicasGet - Gets information about a specific replica.
    **/
    replicapoolReplicasGet(req: operations.ReplicapoolReplicasGetRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasGetResponse>;
    /**
     * replicapoolReplicasList - Lists all replicas in a pool.
    **/
    replicapoolReplicasList(req: operations.ReplicapoolReplicasListRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasListResponse>;
    /**
     * replicapoolReplicasRestart - Restarts a replica in a pool.
    **/
    replicapoolReplicasRestart(req: operations.ReplicapoolReplicasRestartRequest, config?: AxiosRequestConfig): Promise<operations.ReplicapoolReplicasRestartResponse>;
}
