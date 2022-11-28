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
     * documentaiProjectsLocationsFetchProcessorTypes - Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
    **/
    documentaiProjectsLocationsFetchProcessorTypes(req: operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse>;
    /**
     * documentaiProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    documentaiProjectsLocationsList(req: operations.DocumentaiProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsListResponse>;
    /**
     * documentaiProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    documentaiProjectsLocationsOperationsCancel(req: operations.DocumentaiProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsOperationsCancelResponse>;
    /**
     * documentaiProjectsLocationsProcessorTypesList - Lists the processor types that exist.
    **/
    documentaiProjectsLocationsProcessorTypesList(req: operations.DocumentaiProjectsLocationsProcessorTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorTypesListResponse>;
    /**
     * documentaiProjectsLocationsProcessorsCreate - Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.
    **/
    documentaiProjectsLocationsProcessorsCreate(req: operations.DocumentaiProjectsLocationsProcessorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsCreateResponse>;
    /**
     * documentaiProjectsLocationsProcessorsDisable - Disables a processor
    **/
    documentaiProjectsLocationsProcessorsDisable(req: operations.DocumentaiProjectsLocationsProcessorsDisableRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsDisableResponse>;
    /**
     * documentaiProjectsLocationsProcessorsEnable - Enables a processor
    **/
    documentaiProjectsLocationsProcessorsEnable(req: operations.DocumentaiProjectsLocationsProcessorsEnableRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsEnableResponse>;
    /**
     * documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument - Send a document for Human Review. The input document should be processed by the specified processor.
    **/
    documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument(req: operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse>;
    /**
     * documentaiProjectsLocationsProcessorsList - Lists all processors which belong to this project.
    **/
    documentaiProjectsLocationsProcessorsList(req: operations.DocumentaiProjectsLocationsProcessorsListRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsListResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess - LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsDelete - Deletes the processor version, all artifacts under the processor version will be deleted.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsDelete(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsDeploy - Deploys the processor version.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsDeploy(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion - Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGet - Retrieves a specific evaluation.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGet(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList - Retrieves a set of evaluations for a given processor version.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsList - Lists all versions of a processor.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsList(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsProcess - Processes a single document.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsProcess(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsTrain - Trains a new processor version. Operation metadata is returned as cloud_documentai_core.TrainProcessorVersionMetadata.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsTrain(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainResponse>;
    /**
     * documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy - Undeploys the processor version.
    **/
    documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployResponse>;
    /**
     * documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion - Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
    **/
    documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion(req: operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse>;
}
