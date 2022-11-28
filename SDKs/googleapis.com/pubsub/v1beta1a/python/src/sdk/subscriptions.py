import requests
from typing import Any,Optional
from sdk.models import shared, operations
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

    
    def pubsub_subscriptions_acknowledge(self, request: operations.PubsubSubscriptionsAcknowledgeRequest) -> operations.PubsubSubscriptionsAcknowledgeResponse:
        r"""Acknowledges a particular received message: the Pub/Sub system can remove the given message from the subscription. Acknowledging a message whose Ack deadline has expired may succeed, but the message could have been already redelivered. Acknowledging a message more than once will not result in an error. This is only used for messages received via pull.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/subscriptions/acknowledge"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_subscriptions_create(self, request: operations.PubsubSubscriptionsCreateRequest) -> operations.PubsubSubscriptionsCreateResponse:
        r"""Creates a subscription on a given topic for a given subscriber. If the subscription already exists, returns ALREADY_EXISTS. If the corresponding topic doesn't exist, returns NOT_FOUND. If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/subscriptions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    def pubsub_subscriptions_delete(self, request: operations.PubsubSubscriptionsDeleteRequest) -> operations.PubsubSubscriptionsDeleteResponse:
        r"""Deletes an existing subscription. All pending messages in the subscription are immediately dropped. Calls to Pull after deletion will return NOT_FOUND.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1a/subscriptions/{subscription}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_subscriptions_get(self, request: operations.PubsubSubscriptionsGetRequest) -> operations.PubsubSubscriptionsGetResponse:
        r"""Gets the configuration details of a subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1a/subscriptions/{subscription}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    def pubsub_subscriptions_list(self, request: operations.PubsubSubscriptionsListRequest) -> operations.PubsubSubscriptionsListResponse:
        r"""Lists matching subscriptions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSubscriptionsResponse])
                res.list_subscriptions_response = out

        return res

    
    def pubsub_subscriptions_modify_ack_deadline(self, request: operations.PubsubSubscriptionsModifyAckDeadlineRequest) -> operations.PubsubSubscriptionsModifyAckDeadlineResponse:
        r"""Modifies the Ack deadline for a message received from a pull request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/subscriptions/modifyAckDeadline"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsModifyAckDeadlineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_subscriptions_modify_push_config(self, request: operations.PubsubSubscriptionsModifyPushConfigRequest) -> operations.PubsubSubscriptionsModifyPushConfigResponse:
        r"""Modifies the PushConfig for a specified subscription. This method can be used to suspend the flow of messages to an endpoint by clearing the PushConfig field in the request. Messages will be accumulated for delivery even if no push configuration is defined or while the configuration is modified.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/subscriptions/modifyPushConfig"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsModifyPushConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_subscriptions_pull(self, request: operations.PubsubSubscriptionsPullRequest) -> operations.PubsubSubscriptionsPullResponse:
        r"""Pulls a single message from the server. If return_immediately is true, and no messages are available in the subscription, this method returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE error if no messages are available in a reasonable amount of time (to reduce system load).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/subscriptions/pull"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsPullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullResponse])
                res.pull_response = out

        return res

    
    def pubsub_subscriptions_pull_batch(self, request: operations.PubsubSubscriptionsPullBatchRequest) -> operations.PubsubSubscriptionsPullBatchResponse:
        r"""Pulls messages from the server. Returns an empty list if there are no messages available in the backlog. The system is free to return UNAVAILABLE if there are too many pull requests outstanding for the given subscription.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1beta1a/subscriptions/pullBatch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubSubscriptionsPullBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullBatchResponse])
                res.pull_batch_response = out

        return res

    