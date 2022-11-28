import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Labels:
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

    
    def drivelabels_labels_create(self, request: operations.DrivelabelsLabelsCreateRequest) -> operations.DrivelabelsLabelsCreateResponse:
        r"""Creates a new Label.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2beta/labels"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    def drivelabels_labels_delta(self, request: operations.DrivelabelsLabelsDeltaRequest) -> operations.DrivelabelsLabelsDeltaResponse:
        r"""Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}:delta", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsDeltaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse])
                res.google_apps_drive_labels_v2beta_delta_update_label_response = out

        return res

    
    def drivelabels_labels_disable(self, request: operations.DrivelabelsLabelsDisableRequest) -> operations.DrivelabelsLabelsDisableResponse:
        r"""Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}:disable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    def drivelabels_labels_enable(self, request: operations.DrivelabelsLabelsEnableRequest) -> operations.DrivelabelsLabelsEnableResponse:
        r"""Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}:enable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    def drivelabels_labels_list(self, request: operations.DrivelabelsLabelsListRequest) -> operations.DrivelabelsLabelsListResponse:
        r"""List labels.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2beta/labels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaListLabelsResponse])
                res.google_apps_drive_labels_v2beta_list_labels_response = out

        return res

    
    def drivelabels_labels_publish(self, request: operations.DrivelabelsLabelsPublishRequest) -> operations.DrivelabelsLabelsPublishResponse:
        r"""Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}:publish", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    
    def drivelabels_labels_revisions_locks_list(self, request: operations.DrivelabelsLabelsRevisionsLocksListRequest) -> operations.DrivelabelsLabelsRevisionsLocksListResponse:
        r"""Lists the LabelLocks on a Label.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/locks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsLocksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse])
                res.google_apps_drive_labels_v2beta_list_label_locks_response = out

        return res

    
    def drivelabels_labels_revisions_permissions_batch_delete(self, request: operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse:
        r"""Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def drivelabels_labels_revisions_permissions_batch_update(self, request: operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse:
        r"""Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse])
                res.google_apps_drive_labels_v2beta_batch_update_label_permissions_response = out

        return res

    
    def drivelabels_labels_revisions_permissions_create(self, request: operations.DrivelabelsLabelsRevisionsPermissionsCreateRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse:
        r"""Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabelPermission])
                res.google_apps_drive_labels_v2beta_label_permission = out

        return res

    
    def drivelabels_labels_revisions_permissions_delete(self, request: operations.DrivelabelsLabelsRevisionsPermissionsDeleteRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse:
        r"""Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def drivelabels_labels_revisions_permissions_list(self, request: operations.DrivelabelsLabelsRevisionsPermissionsListRequest) -> operations.DrivelabelsLabelsRevisionsPermissionsListResponse:
        r"""Lists a Label's permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsPermissionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse])
                res.google_apps_drive_labels_v2beta_list_label_permissions_response = out

        return res

    
    def drivelabels_labels_revisions_update_permissions(self, request: operations.DrivelabelsLabelsRevisionsUpdatePermissionsRequest) -> operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse:
        r"""Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{parent}/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabelPermission])
                res.google_apps_drive_labels_v2beta_label_permission = out

        return res

    
    def drivelabels_labels_update_label_copy_mode(self, request: operations.DrivelabelsLabelsUpdateLabelCopyModeRequest) -> operations.DrivelabelsLabelsUpdateLabelCopyModeResponse:
        r"""Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta/{name}:updateLabelCopyMode", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLabelsUpdateLabelCopyModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabel])
                res.google_apps_drive_labels_v2beta_label = out

        return res

    