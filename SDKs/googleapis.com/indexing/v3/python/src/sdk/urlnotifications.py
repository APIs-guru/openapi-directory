import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class URLNotifications:
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

    
    def indexing_url_notifications_get_metadata(self, request: operations.IndexingURLNotificationsGetMetadataRequest) -> operations.IndexingURLNotificationsGetMetadataResponse:
        r"""Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/urlNotifications/metadata"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IndexingURLNotificationsGetMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.URLNotificationMetadata])
                res.url_notification_metadata = out

        return res

    
    def indexing_url_notifications_publish(self, request: operations.IndexingURLNotificationsPublishRequest) -> operations.IndexingURLNotificationsPublishResponse:
        r"""Notifies that a URL has been updated or deleted.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/urlNotifications:publish"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IndexingURLNotificationsPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublishURLNotificationResponse])
                res.publish_url_notification_response = out

        return res

    