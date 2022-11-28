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
     * translateProjectsLocationsBatchTranslateDocument - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
    **/
    translateProjectsLocationsBatchTranslateDocument(req: operations.TranslateProjectsLocationsBatchTranslateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsBatchTranslateDocumentResponse>;
    /**
     * translateProjectsLocationsBatchTranslateText - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
    **/
    translateProjectsLocationsBatchTranslateText(req: operations.TranslateProjectsLocationsBatchTranslateTextRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsBatchTranslateTextResponse>;
    /**
     * translateProjectsLocationsDetectLanguage - Detects the language of text within a request.
    **/
    translateProjectsLocationsDetectLanguage(req: operations.TranslateProjectsLocationsDetectLanguageRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsDetectLanguageResponse>;
    /**
     * translateProjectsLocationsGetSupportedLanguages - Returns a list of supported languages for translation.
    **/
    translateProjectsLocationsGetSupportedLanguages(req: operations.TranslateProjectsLocationsGetSupportedLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGetSupportedLanguagesResponse>;
    /**
     * translateProjectsLocationsGlossariesCreate - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
    **/
    translateProjectsLocationsGlossariesCreate(req: operations.TranslateProjectsLocationsGlossariesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesCreateResponse>;
    /**
     * translateProjectsLocationsGlossariesGlossaryEntriesCreate - Creates a glossary entry.
    **/
    translateProjectsLocationsGlossariesGlossaryEntriesCreate(req: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse>;
    /**
     * translateProjectsLocationsGlossariesGlossaryEntriesList - List the entries for the glossary.
    **/
    translateProjectsLocationsGlossariesGlossaryEntriesList(req: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListResponse>;
    /**
     * translateProjectsLocationsGlossariesGlossaryEntriesPatch - Updates a glossary entry.
    **/
    translateProjectsLocationsGlossariesGlossaryEntriesPatch(req: operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchResponse>;
    /**
     * translateProjectsLocationsGlossariesList - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
    **/
    translateProjectsLocationsGlossariesList(req: operations.TranslateProjectsLocationsGlossariesListRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsGlossariesListResponse>;
    /**
     * translateProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    translateProjectsLocationsList(req: operations.TranslateProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsListResponse>;
    /**
     * translateProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    translateProjectsLocationsOperationsCancel(req: operations.TranslateProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsCancelResponse>;
    /**
     * translateProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    translateProjectsLocationsOperationsDelete(req: operations.TranslateProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsDeleteResponse>;
    /**
     * translateProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    translateProjectsLocationsOperationsGet(req: operations.TranslateProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsGetResponse>;
    /**
     * translateProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    translateProjectsLocationsOperationsList(req: operations.TranslateProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsListResponse>;
    /**
     * translateProjectsLocationsOperationsWait - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
    **/
    translateProjectsLocationsOperationsWait(req: operations.TranslateProjectsLocationsOperationsWaitRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsOperationsWaitResponse>;
    /**
     * translateProjectsLocationsTranslateDocument - Translates documents in synchronous mode.
    **/
    translateProjectsLocationsTranslateDocument(req: operations.TranslateProjectsLocationsTranslateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsTranslateDocumentResponse>;
    /**
     * translateProjectsLocationsTranslateText - Translates input text and returns translated text.
    **/
    translateProjectsLocationsTranslateText(req: operations.TranslateProjectsLocationsTranslateTextRequest, config?: AxiosRequestConfig): Promise<operations.TranslateProjectsLocationsTranslateTextResponse>;
}
