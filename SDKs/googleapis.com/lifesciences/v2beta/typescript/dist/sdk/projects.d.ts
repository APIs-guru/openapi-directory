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
     * lifesciencesProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    lifesciencesProjectsLocationsList(req: operations.LifesciencesProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.LifesciencesProjectsLocationsListResponse>;
    /**
     * lifesciencesProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.cancel`
    **/
    lifesciencesProjectsLocationsOperationsCancel(req: operations.LifesciencesProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.LifesciencesProjectsLocationsOperationsCancelResponse>;
    /**
     * lifesciencesProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.get`
    **/
    lifesciencesProjectsLocationsOperationsGet(req: operations.LifesciencesProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.LifesciencesProjectsLocationsOperationsGetResponse>;
    /**
     * lifesciencesProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `lifesciences.operations.list`
    **/
    lifesciencesProjectsLocationsOperationsList(req: operations.LifesciencesProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.LifesciencesProjectsLocationsOperationsListResponse>;
    /**
     * lifesciencesProjectsLocationsPipelinesRun - Runs a pipeline. The returned Operation's metadata field will contain a google.cloud.lifesciences.v2beta.Metadata object describing the status of the pipeline execution. The response field will contain a google.cloud.lifesciences.v2beta.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the *Life Sciences Service Agent* must have access to your project. This is done automatically when the Cloud Life Sciences API is first enabled, but if you delete this permission you must disable and re-enable the API to grant the Life Sciences Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `lifesciences.workflows.run`
    **/
    lifesciencesProjectsLocationsPipelinesRun(req: operations.LifesciencesProjectsLocationsPipelinesRunRequest, config?: AxiosRequestConfig): Promise<operations.LifesciencesProjectsLocationsPipelinesRunResponse>;
}
