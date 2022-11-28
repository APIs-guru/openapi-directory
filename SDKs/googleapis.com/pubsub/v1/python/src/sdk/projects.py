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

    
    def pubsub_projects_schemas_create(self, request: operations.PubsubProjectsSchemasCreateRequest) -> operations.PubsubProjectsSchemasCreateResponse:
        r"""Creates a schema.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/schemas", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSchemasCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Schema])
                res.schema = out

        return res

    
    def pubsub_projects_schemas_delete(self, request: operations.PubsubProjectsSchemasDeleteRequest) -> operations.PubsubProjectsSchemasDeleteResponse:
        r"""Deletes a schema.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSchemasDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_projects_schemas_get(self, request: operations.PubsubProjectsSchemasGetRequest) -> operations.PubsubProjectsSchemasGetResponse:
        r"""Gets a schema.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSchemasGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Schema])
                res.schema = out

        return res

    
    def pubsub_projects_schemas_list(self, request: operations.PubsubProjectsSchemasListRequest) -> operations.PubsubProjectsSchemasListResponse:
        r"""Lists schemas in a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/schemas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSchemasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSchemasResponse])
                res.list_schemas_response = out

        return res

    
    def pubsub_projects_schemas_validate(self, request: operations.PubsubProjectsSchemasValidateRequest) -> operations.PubsubProjectsSchemasValidateResponse:
        r"""Validates a schema.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/schemas:validate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSchemasValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.validate_schema_response = out

        return res

    
    def pubsub_projects_schemas_validate_message(self, request: operations.PubsubProjectsSchemasValidateMessageRequest) -> operations.PubsubProjectsSchemasValidateMessageResponse:
        r"""Validates a message against a schema.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/schemas:validateMessage", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSchemasValidateMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.validate_message_response = out

        return res

    
    def pubsub_projects_snapshots_delete(self, request: operations.PubsubProjectsSnapshotsDeleteRequest) -> operations.PubsubProjectsSnapshotsDeleteResponse:
        r"""Removes an existing snapshot. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{snapshot}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSnapshotsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_projects_snapshots_get(self, request: operations.PubsubProjectsSnapshotsGetRequest) -> operations.PubsubProjectsSnapshotsGetResponse:
        r"""Gets the configuration details of a snapshot. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{snapshot}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSnapshotsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Snapshot])
                res.snapshot = out

        return res

    
    def pubsub_projects_snapshots_list(self, request: operations.PubsubProjectsSnapshotsListRequest) -> operations.PubsubProjectsSnapshotsListResponse:
        r"""Lists the existing snapshots. Snapshots are used in [Seek]( https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{project}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSnapshotsResponse])
                res.list_snapshots_response = out

        return res

    
    def pubsub_projects_subscriptions_acknowledge(self, request: operations.PubsubProjectsSubscriptionsAcknowledgeRequest) -> operations.PubsubProjectsSubscriptionsAcknowledgeResponse:
        r"""Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription. Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}:acknowledge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_projects_subscriptions_delete(self, request: operations.PubsubProjectsSubscriptionsDeleteRequest) -> operations.PubsubProjectsSubscriptionsDeleteResponse:
        r"""Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_projects_subscriptions_detach(self, request: operations.PubsubProjectsSubscriptionsDetachRequest) -> operations.PubsubProjectsSubscriptionsDetachResponse:
        r"""Detaches a subscription from this topic. All messages retained in the subscription are dropped. Subsequent `Pull` and `StreamingPull` requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will stop.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}:detach", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsDetachResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.detach_subscription_response = out

        return res

    
    def pubsub_projects_subscriptions_get(self, request: operations.PubsubProjectsSubscriptionsGetRequest) -> operations.PubsubProjectsSubscriptionsGetResponse:
        r"""Gets the configuration details of a subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    def pubsub_projects_subscriptions_list(self, request: operations.PubsubProjectsSubscriptionsListRequest) -> operations.PubsubProjectsSubscriptionsListResponse:
        r"""Lists matching subscriptions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{project}/subscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSubscriptionsResponse])
                res.list_subscriptions_response = out

        return res

    
    def pubsub_projects_subscriptions_modify_ack_deadline(self, request: operations.PubsubProjectsSubscriptionsModifyAckDeadlineRequest) -> operations.PubsubProjectsSubscriptionsModifyAckDeadlineResponse:
        r"""Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}:modifyAckDeadline", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsModifyAckDeadlineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_projects_subscriptions_modify_push_config(self, request: operations.PubsubProjectsSubscriptionsModifyPushConfigRequest) -> operations.PubsubProjectsSubscriptionsModifyPushConfigResponse:
        r"""Modifies the `PushConfig` for a specified subscription. This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}:modifyPushConfig", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsModifyPushConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_projects_subscriptions_pull(self, request: operations.PubsubProjectsSubscriptionsPullRequest) -> operations.PubsubProjectsSubscriptionsPullResponse:
        r"""Pulls messages from the server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}:pull", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsPullResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullResponse])
                res.pull_response = out

        return res

    
    def pubsub_projects_subscriptions_seek(self, request: operations.PubsubProjectsSubscriptionsSeekRequest) -> operations.PubsubProjectsSubscriptionsSeekResponse:
        r"""Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in [Seek] (https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{subscription}:seek", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsSubscriptionsSeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.seek_response = out

        return res

    
    def pubsub_projects_topics_create(self, request: operations.PubsubProjectsTopicsCreateRequest) -> operations.PubsubProjectsTopicsCreateResponse:
        r"""Creates the given topic with the given name. See the [resource name rules] (https://cloud.google.com/pubsub/docs/admin#resource_names).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsub_projects_topics_delete(self, request: operations.PubsubProjectsTopicsDeleteRequest) -> operations.PubsubProjectsTopicsDeleteResponse:
        r"""Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{topic}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsub_projects_topics_get(self, request: operations.PubsubProjectsTopicsGetRequest) -> operations.PubsubProjectsTopicsGetResponse:
        r"""Gets the configuration of a topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{topic}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsub_projects_topics_get_iam_policy(self, request: operations.PubsubProjectsTopicsGetIamPolicyRequest) -> operations.PubsubProjectsTopicsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def pubsub_projects_topics_list(self, request: operations.PubsubProjectsTopicsListRequest) -> operations.PubsubProjectsTopicsListResponse:
        r"""Lists matching topics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{project}/topics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicsResponse])
                res.list_topics_response = out

        return res

    
    def pubsub_projects_topics_patch(self, request: operations.PubsubProjectsTopicsPatchRequest) -> operations.PubsubProjectsTopicsPatchResponse:
        r"""Updates an existing topic. Note that certain properties of a topic are not modifiable.
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

        res = operations.PubsubProjectsTopicsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsub_projects_topics_publish(self, request: operations.PubsubProjectsTopicsPublishRequest) -> operations.PubsubProjectsTopicsPublishResponse:
        r"""Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{topic}:publish", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublishResponse])
                res.publish_response = out

        return res

    
    def pubsub_projects_topics_set_iam_policy(self, request: operations.PubsubProjectsTopicsSetIamPolicyRequest) -> operations.PubsubProjectsTopicsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def pubsub_projects_topics_snapshots_list(self, request: operations.PubsubProjectsTopicsSnapshotsListRequest) -> operations.PubsubProjectsTopicsSnapshotsListResponse:
        r"""Lists the names of the snapshots on this topic. Snapshots are used in [Seek](https://cloud.google.com/pubsub/docs/replay-overview) operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{topic}/snapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsSnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicSnapshotsResponse])
                res.list_topic_snapshots_response = out

        return res

    
    def pubsub_projects_topics_subscriptions_list(self, request: operations.PubsubProjectsTopicsSubscriptionsListRequest) -> operations.PubsubProjectsTopicsSubscriptionsListResponse:
        r"""Lists the names of the attached subscriptions on this topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{topic}/subscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicSubscriptionsResponse])
                res.list_topic_subscriptions_response = out

        return res

    
    def pubsub_projects_topics_test_iam_permissions(self, request: operations.PubsubProjectsTopicsTestIamPermissionsRequest) -> operations.PubsubProjectsTopicsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubProjectsTopicsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    