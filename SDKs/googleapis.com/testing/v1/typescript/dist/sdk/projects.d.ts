import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * testingProjectsTestMatricesCancel - Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
    **/
    testingProjectsTestMatricesCancel(req: operations.TestingProjectsTestMatricesCancelRequest, config?: AxiosRequestConfig): Promise<operations.TestingProjectsTestMatricesCancelResponse>;
    /**
     * testingProjectsTestMatricesCreate - Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
    **/
    testingProjectsTestMatricesCreate(req: operations.TestingProjectsTestMatricesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TestingProjectsTestMatricesCreateResponse>;
    /**
     * testingProjectsTestMatricesGet - Checks the status of a test matrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
    **/
    testingProjectsTestMatricesGet(req: operations.TestingProjectsTestMatricesGetRequest, config?: AxiosRequestConfig): Promise<operations.TestingProjectsTestMatricesGetResponse>;
}
