import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Notifications:
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

    
    def storage_notifications_delete(self, request: operations.StorageNotificationsDeleteRequest) -> operations.StorageNotificationsDeleteResponse:
        r"""Permanently deletes a notification subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/notificationConfigs/{notification}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageNotificationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_notifications_get(self, request: operations.StorageNotificationsGetRequest) -> operations.StorageNotificationsGetResponse:
        r"""View a notification configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/notificationConfigs/{notification}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageNotificationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Notification])
                res.notification = out

        return res

    
    def storage_notifications_insert(self, request: operations.StorageNotificationsInsertRequest) -> operations.StorageNotificationsInsertResponse:
        r"""Creates a notification subscription for a given bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/notificationConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageNotificationsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Notification])
                res.notification = out

        return res

    
    def storage_notifications_list(self, request: operations.StorageNotificationsListRequest) -> operations.StorageNotificationsListResponse:
        r"""Retrieves a list of notification subscriptions for a given bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/notificationConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageNotificationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Notifications])
                res.notifications = out

        return res

    