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

    
    def connectors_projects_locations_connections_actions_execute(self, request: operations.ConnectorsProjectsLocationsConnectionsActionsExecuteRequest) -> operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse:
        r"""Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:execute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsActionsExecuteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecuteActionResponse])
                res.execute_action_response = out

        return res

    
    def connectors_projects_locations_connections_actions_list(self, request: operations.ConnectorsProjectsLocationsConnectionsActionsListRequest) -> operations.ConnectorsProjectsLocationsConnectionsActionsListResponse:
        r"""Gets the schema of all the actions supported by the connector.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsActionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListActionsResponse])
                res.list_actions_response = out

        return res

    
    def connectors_projects_locations_connections_entity_types_entities_create(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse:
        r"""Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/entities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Entity])
                res.entity = out

        return res

    
    def connectors_projects_locations_connections_entity_types_entities_delete(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse:
        r"""Deletes an existing entity row matching the entity type and entity id specified in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def connectors_projects_locations_connections_entity_types_entities_delete_entities_with_conditions(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse:
        r"""Deletes entities based on conditions specified in the request and not on entity id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{entityType}/entities:deleteEntitiesWithConditions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteEntitiesWithConditionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def connectors_projects_locations_connections_entity_types_entities_get(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse:
        r"""Gets a single entity row matching the entity type and entity id specified in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Entity])
                res.entity = out

        return res

    
    def connectors_projects_locations_connections_entity_types_entities_list(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse:
        r"""Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/entities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEntitiesResponse])
                res.list_entities_response = out

        return res

    
    def connectors_projects_locations_connections_entity_types_entities_patch(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse:
        r"""Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Entity])
                res.entity = out

        return res

    
    def connectors_projects_locations_connections_entity_types_entities_update_entities_with_conditions(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse:
        r"""Updates entities based on conditions specified in the request and not on entity id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{entityType}/entities:updateEntitiesWithConditions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesUpdateEntitiesWithConditionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateEntitiesWithConditionsResponse])
                res.update_entities_with_conditions_response = out

        return res

    
    def connectors_projects_locations_connections_entity_types_list(self, request: operations.ConnectorsProjectsLocationsConnectionsEntityTypesListRequest) -> operations.ConnectorsProjectsLocationsConnectionsEntityTypesListResponse:
        r"""Lists metadata related to all entity types present in the external system.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/entityTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsEntityTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEntityTypesResponse])
                res.list_entity_types_response = out

        return res

    
    def connectors_projects_locations_connections_execute_sql_query(self, request: operations.ConnectorsProjectsLocationsConnectionsExecuteSQLQueryRequest) -> operations.ConnectorsProjectsLocationsConnectionsExecuteSQLQueryResponse:
        r"""Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{connection}:executeSqlQuery", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnectorsProjectsLocationsConnectionsExecuteSQLQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ExecuteSQLQueryResponse])
                res.execute_sql_query_response = out

        return res

    