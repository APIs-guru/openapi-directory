import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Workers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getWorkerArchitectureNameWorkerId - Lists capabilites of a worker.
     *
     * Lists capabilites of a worker.
     *
     * This can be useful when checking for constraints.
     *
     * This operation is the same as `GET /worker/capability/{architecture_name}:{worker_id}`.
     *
    **/
    getWorkerArchitectureNameWorkerId(req: operations.GetWorkerArchitectureNameWorkerIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkerArchitectureNameWorkerIdResponse>;
    /**
     * getWorkerStatus - Lists status of workers, jobs, backend services and general statistics.
     *
     * Lists status of workers, running jobs, waiting jobs, status of the backend services and general statistics.
     *
     * Other ways to obtain the same information as with this endpoint are:
     *   * `GET /worker/_status`
     *   * `GET /status/workerstatus`
     *   * `GET /build/_workerstatus`
     *
    **/
    getWorkerStatus(req: operations.GetWorkerStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkerStatusResponse>;
    /**
     * postWorkerCmdEqualCheckconstraints - Lists workers which match a constraints filter.
     *
     * Given a project, package, repository and architecture, list workers which can build with that restrictions, and also match a constraints filter.
     *
     * This endpoint doesn't create or modify any data.
     *
     * More information about constraints can be found in the
     * [user guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html).
     *
     * This operation is the same as `POST /worker/command/run?cmd=checkconstraints`.
     *
    **/
    postWorkerCmdEqualCheckconstraints(req: operations.PostWorkerCmdEqualCheckconstraintsRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkerCmdEqualCheckconstraintsResponse>;
}
