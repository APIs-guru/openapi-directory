import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ClusterApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * asyncClusteringProblem - Batch Cluster Endpoint
     *
     *
     * Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
     * long running problems only. The work flow is asynchronous:
     *
     * - send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
     * - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
     *   towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.
     *
    **/
    asyncClusteringProblem(req: operations.AsyncClusteringProblemRequest, config?: AxiosRequestConfig): Promise<operations.AsyncClusteringProblemResponse>;
    /**
     * getClusterSolution - GET Batch Solution Endpoint
     *
     * This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
     * You can fetch it with the job_id, you have been sent.
     *
    **/
    getClusterSolution(req: operations.GetClusterSolutionRequest, config?: AxiosRequestConfig): Promise<operations.GetClusterSolutionResponse>;
    /**
     * solveClusteringProblem - POST Cluster Endpoint
     *
     *
     * The Cluster endpoint is used with a POST request towards
     * `https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
     * Please note that for problems that take longer than 10 seconds a bad request error is returned.
     * In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.
     *
    **/
    solveClusteringProblem(req: operations.SolveClusteringProblemRequest, config?: AxiosRequestConfig): Promise<operations.SolveClusteringProblemResponse>;
}
