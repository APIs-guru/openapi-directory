import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://drivelabels.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def drivelabels_labels_create(self, request: operations.DrivelabelsLabelsCreateRequest) -> operations.DrivelabelsLabelsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2beta/labels"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    
    def drivelabels_labels_delta(self, request: operations.DrivelabelsLabelsDeltaRequest) -> operations.DrivelabelsLabelsDeltaResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{name}:delta", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsDeltaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse])
                res.google_apps_drive_labels_v2beta_delta_update_label_response = out

        return res

    
    
    def drivelabels_labels_disable(self, request: operations.DrivelabelsLabelsDisableRequest) -> operations.DrivelabelsLabelsDisableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{name}:disable", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsDisableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    
    def drivelabels_labels_enable(self, request: operations.DrivelabelsLabelsEnableRequest) -> operations.DrivelabelsLabelsEnableResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{name}:enable", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsEnableResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    
    def drivelabels_labels_list(self, request: operations.DrivelabelsLabelsListRequest) -> operations.DrivelabelsLabelsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2beta/labels"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaListLabelsResponse])
                res.google_apps_drive_labels_v2beta_list_labels_response = out

        return res

    
    
    def drivelabels_labels_permissions_batch_delete(self, request: operations.DrivelabelsLabelsPermissionsBatchDeleteRequest) -> operations.DrivelabelsLabelsPermissionsBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/labels/{labelsId}/permissions:batchDelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsPermissionsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def drivelabels_labels_publish(self, request: operations.DrivelabelsLabelsPublishRequest) -> operations.DrivelabelsLabelsPublishResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{name}:publish", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsPublishResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    
    def drivelabels_labels_revisions_locks_list(self, request: operations.DrivelabelsLabelsRevisionsLocksListRequest) -> operations.DrivelabelsLabelsRevisionsLocksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{parent}/locks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsLocksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse])
                res.google_apps_drive_labels_v2beta_list_label_locks_response = out

        return res

    
    
    def drivelabels_labels_revisions_permissions_batch_delete(self, request: operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/labels/{labelsId}/revisions/{revisionsId}/permissions:batchDelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def drivelabels_labels_revisions_permissions_batch_update(self, request: operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions:batchUpdate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse])
                res.google_apps_drive_labels_v2beta_batch_update_label_permissions_response = out

        return res

    
    
    def drivelabels_labels_revisions_permissions_create(self, request: operations.DrivelabelsLabelsRevisionsPermissionsCreateRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabelPermission])
                res.google_apps_drive_labels_v2beta_label_permission = out

        return res

    
    
    def drivelabels_labels_revisions_permissions_delete(self, request: operations.DrivelabelsLabelsRevisionsPermissionsDeleteRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def drivelabels_labels_revisions_permissions_list(self, request: operations.DrivelabelsLabelsRevisionsPermissionsListRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse])
                res.google_apps_drive_labels_v2beta_list_label_permissions_response = out

        return res

    
    
    def drivelabels_labels_revisions_permissions_patch(self, request: operations.DrivelabelsLabelsRevisionsPermissionsPatchRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{parent}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabelPermission])
                res.google_apps_drive_labels_v2beta_label_permission = out

        return res

    
    
    def drivelabels_labels_update_label_copy_mode(self, request: operations.DrivelabelsLabelsUpdateLabelCopyModeRequest) -> operations.DrivelabelsLabelsUpdateLabelCopyModeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{name}:updateLabelCopyMode", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsUpdateLabelCopyModeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    
    def drivelabels_limits_get_label(self, request: operations.DrivelabelsLimitsGetLabelRequest) -> operations.DrivelabelsLimitsGetLabelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2beta/limits/label"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLimitsGetLabelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabelLimits])
                res.google_apps_drive_labels_v2beta_label_limits = out

        return res

    
    
    def drivelabels_users_get_capabilities(self, request: operations.DrivelabelsUsersGetCapabilitiesRequest) -> operations.DrivelabelsUsersGetCapabilitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsUsersGetCapabilitiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaUserCapabilities])
                res.google_apps_drive_labels_v2beta_user_capabilities = out

        return res

    