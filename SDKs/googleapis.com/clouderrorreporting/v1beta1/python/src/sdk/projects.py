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

    
    def clouderrorreporting_projects_delete_events(self, request: operations.ClouderrorreportingProjectsDeleteEventsRequest) -> operations.ClouderrorreportingProjectsDeleteEventsResponse:
        r"""Deletes all error events of a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{projectName}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouderrorreportingProjectsDeleteEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_events_response = out

        return res

    
    def clouderrorreporting_projects_events_list(self, request: operations.ClouderrorreportingProjectsEventsListRequest) -> operations.ClouderrorreportingProjectsEventsListResponse:
        r"""Lists the specified events.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{projectName}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouderrorreportingProjectsEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListEventsResponse])
                res.list_events_response = out

        return res

    
    def clouderrorreporting_projects_events_report(self, request: operations.ClouderrorreportingProjectsEventsReportRequest) -> operations.ClouderrorreportingProjectsEventsReportResponse:
        r"""Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a global service built on Cloud Logging and doesn't analyze logs stored in regional log buckets or logs routed to other Google Cloud projects. For more information, see [Using Error Reporting with regionalized logs] (https://cloud.google.com/error-reporting/docs/regionalization).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{projectName}/events:report", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouderrorreportingProjectsEventsReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.report_error_event_response = out

        return res

    
    def clouderrorreporting_projects_group_stats_list(self, request: operations.ClouderrorreportingProjectsGroupStatsListRequest) -> operations.ClouderrorreportingProjectsGroupStatsListResponse:
        r"""Lists the specified groups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{projectName}/groupStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouderrorreportingProjectsGroupStatsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGroupStatsResponse])
                res.list_group_stats_response = out

        return res

    
    def clouderrorreporting_projects_groups_get(self, request: operations.ClouderrorreportingProjectsGroupsGetRequest) -> operations.ClouderrorreportingProjectsGroupsGetResponse:
        r"""Get the specified group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{groupName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouderrorreportingProjectsGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorGroup])
                res.error_group = out

        return res

    
    def clouderrorreporting_projects_groups_update(self, request: operations.ClouderrorreportingProjectsGroupsUpdateRequest) -> operations.ClouderrorreportingProjectsGroupsUpdateResponse:
        r"""Replace the data for the specified group. Fails if the group does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClouderrorreportingProjectsGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorGroup])
                res.error_group = out

        return res

    