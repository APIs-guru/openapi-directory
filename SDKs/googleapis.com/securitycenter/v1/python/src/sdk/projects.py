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

    
    def securitycenter_projects_assets_group(self, request: operations.SecuritycenterProjectsAssetsGroupRequest) -> operations.SecuritycenterProjectsAssetsGroupResponse:
        r"""Filters an organization's assets and groups them by their specified properties.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/assets:group", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsAssetsGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupAssetsResponse])
                res.group_assets_response = out

        return res

    
    def securitycenter_projects_assets_list(self, request: operations.SecuritycenterProjectsAssetsListRequest) -> operations.SecuritycenterProjectsAssetsListResponse:
        r"""Lists an organization's assets.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/assets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsAssetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssetsResponse])
                res.list_assets_response = out

        return res

    
    def securitycenter_projects_big_query_exports_create(self, request: operations.SecuritycenterProjectsBigQueryExportsCreateRequest) -> operations.SecuritycenterProjectsBigQueryExportsCreateResponse:
        r"""Creates a big query export.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/bigQueryExports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsBigQueryExportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudSecuritycenterV1BigQueryExport])
                res.google_cloud_securitycenter_v1_big_query_export = out

        return res

    
    def securitycenter_projects_big_query_exports_list(self, request: operations.SecuritycenterProjectsBigQueryExportsListRequest) -> operations.SecuritycenterProjectsBigQueryExportsListResponse:
        r"""Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/bigQueryExports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsBigQueryExportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBigQueryExportsResponse])
                res.list_big_query_exports_response = out

        return res

    
    def securitycenter_projects_findings_bulk_mute(self, request: operations.SecuritycenterProjectsFindingsBulkMuteRequest) -> operations.SecuritycenterProjectsFindingsBulkMuteResponse:
        r"""Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/findings:bulkMute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsFindingsBulkMuteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def securitycenter_projects_mute_configs_create(self, request: operations.SecuritycenterProjectsMuteConfigsCreateRequest) -> operations.SecuritycenterProjectsMuteConfigsCreateResponse:
        r"""Creates a mute config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/muteConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsMuteConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudSecuritycenterV1MuteConfig])
                res.google_cloud_securitycenter_v1_mute_config = out

        return res

    
    def securitycenter_projects_mute_configs_list(self, request: operations.SecuritycenterProjectsMuteConfigsListRequest) -> operations.SecuritycenterProjectsMuteConfigsListResponse:
        r"""Lists mute configs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/muteConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsMuteConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMuteConfigsResponse])
                res.list_mute_configs_response = out

        return res

    
    def securitycenter_projects_notification_configs_create(self, request: operations.SecuritycenterProjectsNotificationConfigsCreateRequest) -> operations.SecuritycenterProjectsNotificationConfigsCreateResponse:
        r"""Creates a notification config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/notificationConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsNotificationConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationConfig])
                res.notification_config = out

        return res

    
    def securitycenter_projects_notification_configs_delete(self, request: operations.SecuritycenterProjectsNotificationConfigsDeleteRequest) -> operations.SecuritycenterProjectsNotificationConfigsDeleteResponse:
        r"""Deletes a notification config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsNotificationConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def securitycenter_projects_notification_configs_get(self, request: operations.SecuritycenterProjectsNotificationConfigsGetRequest) -> operations.SecuritycenterProjectsNotificationConfigsGetResponse:
        r"""Gets a notification config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsNotificationConfigsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotificationConfig])
                res.notification_config = out

        return res

    
    def securitycenter_projects_notification_configs_list(self, request: operations.SecuritycenterProjectsNotificationConfigsListRequest) -> operations.SecuritycenterProjectsNotificationConfigsListResponse:
        r"""Lists notification configs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/notificationConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsNotificationConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNotificationConfigsResponse])
                res.list_notification_configs_response = out

        return res

    
    def securitycenter_projects_sources_findings_external_systems_patch(self, request: operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchRequest) -> operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse:
        r"""Updates external system. This is for a given finding.
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

        res = operations.SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudSecuritycenterV1ExternalSystem])
                res.google_cloud_securitycenter_v1_external_system = out

        return res

    
    def securitycenter_projects_sources_findings_group(self, request: operations.SecuritycenterProjectsSourcesFindingsGroupRequest) -> operations.SecuritycenterProjectsSourcesFindingsGroupResponse:
        r"""Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/findings:group", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsSourcesFindingsGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupFindingsResponse])
                res.group_findings_response = out

        return res

    
    def securitycenter_projects_sources_findings_list(self, request: operations.SecuritycenterProjectsSourcesFindingsListRequest) -> operations.SecuritycenterProjectsSourcesFindingsListResponse:
        r"""Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/findings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsSourcesFindingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFindingsResponse])
                res.list_findings_response = out

        return res

    
    def securitycenter_projects_sources_findings_set_mute(self, request: operations.SecuritycenterProjectsSourcesFindingsSetMuteRequest) -> operations.SecuritycenterProjectsSourcesFindingsSetMuteResponse:
        r"""Updates the mute state of a finding.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setMute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsSourcesFindingsSetMuteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Finding])
                res.finding = out

        return res

    
    def securitycenter_projects_sources_findings_set_state(self, request: operations.SecuritycenterProjectsSourcesFindingsSetStateRequest) -> operations.SecuritycenterProjectsSourcesFindingsSetStateResponse:
        r"""Updates the state of a finding.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setState", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsSourcesFindingsSetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Finding])
                res.finding = out

        return res

    
    def securitycenter_projects_sources_list(self, request: operations.SecuritycenterProjectsSourcesListRequest) -> operations.SecuritycenterProjectsSourcesListResponse:
        r"""Lists all sources belonging to an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/sources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsSourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSourcesResponse])
                res.list_sources_response = out

        return res

    