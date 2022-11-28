import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RouteOptimizationApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * asyncVrp - POST route optimization problem (batch mode)
     *
     *
     * To solve a vehicle routing problem, perform the following steps:
     *
     * 1.) Make a HTTP POST to this URL
     *
     * ```
     * https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
     * ```
     *
     * It returns a job id (job_id).
     *
     * 2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:
     *
     * ```
     * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
     * ```
     *
     * We recommend to query the solution every 500ms until it returns 'status=finished'.
     *
     * **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
     * the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.
     *
    **/
    asyncVrp(req: operations.AsyncVrpRequest, config?: AxiosRequestConfig): Promise<operations.AsyncVrpResponse>;
    /**
     * getSolution - GET the solution (batch mode)
     *
     *
     * Take the job id and fetch the solution for the vehicle routing problem from this URL:
     *
     * ```
     * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
     * ```
     *
     * You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).
     *
    **/
    getSolution(req: operations.GetSolutionRequest, config?: AxiosRequestConfig): Promise<operations.GetSolutionResponse>;
    /**
     * solveVrp - POST route optimization problem
     *
     *
     * To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).
     *
     * To solve a new vehicle routing problem, make a HTTP POST to this URL
     *
     * ```
     * https://graphhopper.com/api/1/vrp?key=<your_key>
     * ```
     *
     * It returns the solution to this problem in the JSON response.
     *
     * Please note that this URL is very well suited to solve minor problems.
     * Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
     * To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.
     *
    **/
    solveVrp(req: operations.SolveVrpRequest, config?: AxiosRequestConfig): Promise<operations.SolveVrpResponse>;
}
