import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class V2:
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

    
    def logging_get_cmek_settings(self, request: operations.LoggingGetCmekSettingsRequest) -> operations.LoggingGetCmekSettingsResponse:
        r"""Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/cmekSettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LoggingGetCmekSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CmekSettings])
                res.cmek_settings = out

        return res

    
    def logging_get_settings(self, request: operations.LoggingGetSettingsRequest) -> operations.LoggingGetSettingsResponse:
        r"""Gets the Log Router settings for the given resource.Note: Settings for the Log Router can be get for Google Cloud projects, folders, organizations and billing accounts. Currently it can only be configured for organizations. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LoggingGetSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Settings])
                res.settings = out

        return res

    
    def logging_update_cmek_settings(self, request: operations.LoggingUpdateCmekSettingsRequest) -> operations.LoggingUpdateCmekSettingsResponse:
        r"""Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/cmekSettings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LoggingUpdateCmekSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CmekSettings])
                res.cmek_settings = out

        return res

    
    def logging_update_settings(self, request: operations.LoggingUpdateSettingsRequest) -> operations.LoggingUpdateSettingsResponse:
        r"""Updates the Log Router settings for the given resource.Note: Settings for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateSettings will fail if 1) kms_key_name is invalid, or 2) the associated service account does not have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key, or 3) access to the key is disabled. 4) location_id is not supported by Logging. 5) location_id violate OrgPolicy.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LoggingUpdateSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Settings])
                res.settings = out

        return res

    