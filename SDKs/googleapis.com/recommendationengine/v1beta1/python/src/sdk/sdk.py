import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://recommendationengine.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def recommendationengine_projects_locations_catalogs_catalog_items_create(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogItems", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1CatalogItem])
                res.google_cloud_recommendationengine_v1beta1_catalog_item = out

        return res

    
    def recommendationengine_projects_locations_catalogs_catalog_items_import(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogItems:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_catalog_items_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogItems", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_catalog_items_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_catalog_items_patch(self, request: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest) -> operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1CatalogItem])
                res.google_cloud_recommendationengine_v1beta1_catalog_item = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_placements_predict(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:predict", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1PredictResponse])
                res.google_cloud_recommendationengine_v1beta1_predict_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_create(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/predictionApiKeyRegistrations", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration])
                res.google_cloud_recommendationengine_v1beta1_prediction_api_key_registration = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/predictionApiKeyRegistrations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_collect(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:collect", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_import(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_user_events_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_purge(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:purge", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_rejoin(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:rejoin", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_event_stores_user_events_write(self, request: operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest) -> operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userEvents:write", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1UserEvent])
                res.google_cloud_recommendationengine_v1beta1_user_event = out

        return res

    
    def recommendationengine_projects_locations_catalogs_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/catalogs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse])
                res.google_cloud_recommendationengine_v1beta1_list_catalogs_response = out

        return res

    
    def recommendationengine_projects_locations_catalogs_operations_get(self, request: operations.RecommendationengineProjectsLocationsCatalogsOperationsGetRequest) -> operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def recommendationengine_projects_locations_catalogs_operations_list(self, request: operations.RecommendationengineProjectsLocationsCatalogsOperationsListRequest) -> operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/operations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    