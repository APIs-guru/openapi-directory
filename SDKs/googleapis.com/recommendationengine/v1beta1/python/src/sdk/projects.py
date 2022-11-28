import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def recommendationengine_projects_locations_catalogs_catalog_items_create(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse:
        r"""Creates a catalog item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogItems", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1CatalogItem])
                res.google_cloud_recommendationengine_v1beta1_catalog_item = out

        return res

    
    def recommendationengine_projects_locations_catalogs_catalog_items_import(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse:
        r"""Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogItems:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_catalog_items_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse:
        r"""Gets a list of catalog items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogItems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_catalog_items_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_catalog_items_patch(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse:
        r"""Updates a catalog item. Partial updating is supported. Non-existing items will be created.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1CatalogItem])
                res.google_cloud_recommendationengine_v1beta1_catalog_item = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_placements_predict(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse:
        r"""Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:predict", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1PredictResponse])
                res.google_cloud_recommendationengine_v1beta1_predict_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_create(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateResponse:
        r"""Register an API key for use with predict method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/predictionApiKeyRegistrations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration])
                res.google_cloud_recommendationengine_v1beta1_prediction_api_key_registration = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteResponse:
        r"""Unregister an apiKey from using for predict method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListResponse:
        r"""List the registered apiKeys for use with predict method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/predictionApiKeyRegistrations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_collect(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse:
        r"""Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:collect", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_import(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse:
        r"""Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse:
        r"""Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_user_events_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_purge(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse:
        r"""Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:purge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_rejoin(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse:
        r"""Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:rejoin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_write(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse:
        r"""Writes a single user event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:write", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1UserEvent])
                res.google_cloud_recommendationengine_v1beta1_user_event = out

        return res

    
    def recommendationengine_projects_locations_catalogs_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsListResponse:
        r"""Lists all the catalog configurations associated with the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_catalogs_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_operations_get(self, request: operations.RecommendationengineProjectsLocationsCatalogsOperationsGetRequest) -> operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_operations_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsOperationsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    