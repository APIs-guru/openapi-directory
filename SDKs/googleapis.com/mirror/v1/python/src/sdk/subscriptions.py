import requests
from sdk.models import operations
from . import utils

class Subscriptions:
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

    
    def mirror_subscriptions_delete(self, request: operations.MirrorSubscriptionsDeleteRequest) -> operations.MirrorSubscriptionsDeleteResponse:
        r"""Deletes a subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorSubscriptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def mirror_subscriptions_insert(self, request: operations.MirrorSubscriptionsInsertRequest) -> operations.MirrorSubscriptionsInsertResponse:
        r"""Creates a new subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscriptions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorSubscriptionsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_subscriptions_list(self, request: operations.MirrorSubscriptionsListRequest) -> operations.MirrorSubscriptionsListResponse:
        r"""Retrieves a list of subscriptions for the authenticated user and service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_subscriptions_update(self, request: operations.MirrorSubscriptionsUpdateRequest) -> operations.MirrorSubscriptionsUpdateResponse:
        r"""Updates an existing subscription in place.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/subscriptions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorSubscriptionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    