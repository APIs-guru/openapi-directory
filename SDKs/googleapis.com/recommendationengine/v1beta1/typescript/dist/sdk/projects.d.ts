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
     * recommendationengineProjectsLocationsCatalogsCatalogItemsCreate - Creates a catalog item.
    **/
    recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsCatalogItemsImport - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
    **/
    recommendationengineProjectsLocationsCatalogsCatalogItemsImport(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsCatalogItemsList - Gets a list of catalog items.
    **/
    recommendationengineProjectsLocationsCatalogsCatalogItemsList(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsCatalogItemsPatch - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
    **/
    recommendationengineProjectsLocationsCatalogsCatalogItemsPatch(req: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate - Register an API key for use with predict method.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete - Unregister an apiKey from using for predict method.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList - List the registered apiKeys for use with predict method.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite - Writes a single user event.
    **/
    recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite(req: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsList - Lists all the catalog configurations associated with the project.
    **/
    recommendationengineProjectsLocationsCatalogsList(req: operations.RecommendationengineProjectsLocationsCatalogsListRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsListResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    recommendationengineProjectsLocationsCatalogsOperationsGet(req: operations.RecommendationengineProjectsLocationsCatalogsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse>;
    /**
     * recommendationengineProjectsLocationsCatalogsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    recommendationengineProjectsLocationsCatalogsOperationsList(req: operations.RecommendationengineProjectsLocationsCatalogsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse>;
}
