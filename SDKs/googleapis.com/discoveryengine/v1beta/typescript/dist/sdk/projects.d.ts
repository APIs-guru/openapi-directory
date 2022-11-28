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
     * discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate - Creates a Document.
    **/
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete - Deletes a Document.
    **/
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
    **/
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresBranchesDocumentsList - Gets a list of Documents.
    **/
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsList(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch - Updates a Document.
    **/
    discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch(req: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresServingConfigsRecommend - Makes a recommendation, which requires a contextual user event.
    **/
    discoveryengineProjectsLocationsDataStoresServingConfigsRecommend(req: operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresUserEventsCollect - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
    **/
    discoveryengineProjectsLocationsDataStoresUserEventsCollect(req: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresUserEventsImport - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
    **/
    discoveryengineProjectsLocationsDataStoresUserEventsImport(req: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse>;
    /**
     * discoveryengineProjectsLocationsDataStoresUserEventsWrite - Writes a single user event.
    **/
    discoveryengineProjectsLocationsDataStoresUserEventsWrite(req: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse>;
    /**
     * discoveryengineProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    discoveryengineProjectsOperationsGet(req: operations.DiscoveryengineProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsOperationsGetResponse>;
    /**
     * discoveryengineProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    discoveryengineProjectsOperationsList(req: operations.DiscoveryengineProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DiscoveryengineProjectsOperationsListResponse>;
}
