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

    
    def discoveryengine_projects_locations_data_stores_branches_documents_create(self, request: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse:
        r"""Creates a Document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/documents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDiscoveryengineV1betaDocument])
                res.google_cloud_discoveryengine_v1beta_document = out

        return res

    
    def discoveryengine_projects_locations_data_stores_branches_documents_delete(self, request: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse:
        r"""Deletes a Document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def discoveryengine_projects_locations_data_stores_branches_documents_import(self, request: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse:
        r"""Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/documents:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def discoveryengine_projects_locations_data_stores_branches_documents_list(self, request: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse:
        r"""Gets a list of Documents.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDiscoveryengineV1betaListDocumentsResponse])
                res.google_cloud_discoveryengine_v1beta_list_documents_response = out

        return res

    
    def discoveryengine_projects_locations_data_stores_branches_documents_patch(self, request: operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse:
        r"""Updates a Document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDiscoveryengineV1betaDocument])
                res.google_cloud_discoveryengine_v1beta_document = out

        return res

    
    def discoveryengine_projects_locations_data_stores_serving_configs_recommend(self, request: operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse:
        r"""Makes a recommendation, which requires a contextual user event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{servingConfig}:recommend", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDiscoveryengineV1betaRecommendResponse])
                res.google_cloud_discoveryengine_v1beta_recommend_response = out

        return res

    
    def discoveryengine_projects_locations_data_stores_user_events_collect(self, request: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse:
        r"""Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/userEvents:collect", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def discoveryengine_projects_locations_data_stores_user_events_import(self, request: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse:
        r"""Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/userEvents:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def discoveryengine_projects_locations_data_stores_user_events_write(self, request: operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest) -> operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse:
        r"""Writes a single user event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/userEvents:write", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDiscoveryengineV1betaUserEvent])
                res.google_cloud_discoveryengine_v1beta_user_event = out

        return res

    
    def discoveryengine_projects_operations_get(self, request: operations.DiscoveryengineProjectsOperationsGetRequest) -> operations.DiscoveryengineProjectsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def discoveryengine_projects_operations_list(self, request: operations.DiscoveryengineProjectsOperationsListRequest) -> operations.DiscoveryengineProjectsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryengineProjectsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    