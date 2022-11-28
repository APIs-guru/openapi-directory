import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Topics:
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

    
    def pubsub_topics_create(self, request: operations.PubsubTopicsCreateRequest) -> operations.PubsubTopicsCreateResponse:
        r"""Creates the given topic with the given name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/topics"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubTopicsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsub_topics_delete(self, request: operations.PubsubTopicsDeleteRequest) -> operations.PubsubTopicsDeleteResponse:
        r"""Deletes the topic with the given name. Returns NOT_FOUND if the topic does not exist. After a topic is deleted, a new topic may be created with the same name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1a/topics/{topic}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubTopicsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_topics_get(self, request: operations.PubsubTopicsGetRequest) -> operations.PubsubTopicsGetResponse:
        r"""Gets the configuration of a topic. Since the topic only has the name attribute, this method is only useful to check the existence of a topic. If other attributes are added in the future, they will be returned here.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1a/topics/{topic}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubTopicsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsub_topics_list(self, request: operations.PubsubTopicsListRequest) -> operations.PubsubTopicsListResponse:
        r"""Lists matching topics.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/topics"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubTopicsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicsResponse])
                res.list_topics_response = out

        return res

    
    def pubsub_topics_publish(self, request: operations.PubsubTopicsPublishRequest) -> operations.PubsubTopicsPublishResponse:
        r"""Adds a message to the topic. Returns NOT_FOUND if the topic does not exist.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/topics/publish"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubTopicsPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_topics_publish_batch(self, request: operations.PubsubTopicsPublishBatchRequest) -> operations.PubsubTopicsPublishBatchResponse:
        r"""Adds one or more messages to the topic. Returns NOT_FOUND if the topic does not exist.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/topics/publishBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubTopicsPublishBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublishBatchResponse])
                res.publish_batch_response = out

        return res

    