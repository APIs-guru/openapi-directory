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

    
    def monitoring_projects_dashboards_create(self, request: operations.MonitoringProjectsDashboardsCreateRequest) -> operations.MonitoringProjectsDashboardsCreateResponse:
        r"""Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/dashboards", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsDashboardsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dashboard])
                res.dashboard = out

        return res

    
    def monitoring_projects_dashboards_delete(self, request: operations.MonitoringProjectsDashboardsDeleteRequest) -> operations.MonitoringProjectsDashboardsDeleteResponse:
        r"""Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsDashboardsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def monitoring_projects_dashboards_get(self, request: operations.MonitoringProjectsDashboardsGetRequest) -> operations.MonitoringProjectsDashboardsGetResponse:
        r"""Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsDashboardsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dashboard])
                res.dashboard = out

        return res

    
    def monitoring_projects_dashboards_list(self, request: operations.MonitoringProjectsDashboardsListRequest) -> operations.MonitoringProjectsDashboardsListResponse:
        r"""Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/dashboards", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsDashboardsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDashboardsResponse])
                res.list_dashboards_response = out

        return res

    
    def monitoring_projects_dashboards_patch(self, request: operations.MonitoringProjectsDashboardsPatchRequest) -> operations.MonitoringProjectsDashboardsPatchResponse:
        r"""Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsDashboardsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dashboard])
                res.dashboard = out

        return res

    
    def monitoring_projects_location_prometheus_api_v1_label_values(self, request: operations.MonitoringProjectsLocationPrometheusAPIV1LabelValuesRequest) -> operations.MonitoringProjectsLocationPrometheusAPIV1LabelValuesResponse:
        r"""Lists possible values for a given label name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/location/{location}/prometheus/api/v1/label/{label}/values", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsLocationPrometheusAPIV1LabelValuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def monitoring_projects_location_prometheus_api_v1_labels(self, request: operations.MonitoringProjectsLocationPrometheusAPIV1LabelsRequest) -> operations.MonitoringProjectsLocationPrometheusAPIV1LabelsResponse:
        r"""Lists labels for metrics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/location/{location}/prometheus/api/v1/labels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsLocationPrometheusAPIV1LabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def monitoring_projects_location_prometheus_api_v1_labels_list(self, request: operations.MonitoringProjectsLocationPrometheusAPIV1LabelsListRequest) -> operations.MonitoringProjectsLocationPrometheusAPIV1LabelsListResponse:
        r"""Lists labels for metrics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/location/{location}/prometheus/api/v1/labels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsLocationPrometheusAPIV1LabelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def monitoring_projects_location_prometheus_api_v1_metadata_list(self, request: operations.MonitoringProjectsLocationPrometheusAPIV1MetadataListRequest) -> operations.MonitoringProjectsLocationPrometheusAPIV1MetadataListResponse:
        r"""Lists metadata for metrics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/location/{location}/prometheus/api/v1/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsLocationPrometheusAPIV1MetadataListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def monitoring_projects_location_prometheus_api_v1_query(self, request: operations.MonitoringProjectsLocationPrometheusAPIV1QueryRequest) -> operations.MonitoringProjectsLocationPrometheusAPIV1QueryResponse:
        r"""Evaluate a PromQL query at a single point in time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/location/{location}/prometheus/api/v1/query", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsLocationPrometheusAPIV1QueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def monitoring_projects_location_prometheus_api_v1_query_range(self, request: operations.MonitoringProjectsLocationPrometheusAPIV1QueryRangeRequest) -> operations.MonitoringProjectsLocationPrometheusAPIV1QueryRangeResponse:
        r"""Evaluate a PromQL query with start, end time range.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/location/{location}/prometheus/api/v1/query_range", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsLocationPrometheusAPIV1QueryRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def monitoring_projects_location_prometheus_api_v1_series(self, request: operations.MonitoringProjectsLocationPrometheusAPIV1SeriesRequest) -> operations.MonitoringProjectsLocationPrometheusAPIV1SeriesResponse:
        r"""Lists metadata for metrics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/location/{location}/prometheus/api/v1/series", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringProjectsLocationPrometheusAPIV1SeriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    