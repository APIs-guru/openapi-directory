import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Admin:
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

    
    def pubsublite_admin_projects_locations_operations_cancel(self, request: operations.PubsubliteAdminProjectsLocationsOperationsCancelRequest) -> operations.PubsubliteAdminProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsublite_admin_projects_locations_operations_list(self, request: operations.PubsubliteAdminProjectsLocationsOperationsListRequest) -> operations.PubsubliteAdminProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def pubsublite_admin_projects_locations_reservations_create(self, request: operations.PubsubliteAdminProjectsLocationsReservationsCreateRequest) -> operations.PubsubliteAdminProjectsLocationsReservationsCreateResponse:
        r"""Creates a new reservation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{parent}/reservations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsReservationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reservation])
                res.reservation = out

        return res

    
    def pubsublite_admin_projects_locations_reservations_list(self, request: operations.PubsubliteAdminProjectsLocationsReservationsListRequest) -> operations.PubsubliteAdminProjectsLocationsReservationsListResponse:
        r"""Returns the list of reservations for the given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{parent}/reservations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsReservationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReservationsResponse])
                res.list_reservations_response = out

        return res

    
    def pubsublite_admin_projects_locations_reservations_topics_list(self, request: operations.PubsubliteAdminProjectsLocationsReservationsTopicsListRequest) -> operations.PubsubliteAdminProjectsLocationsReservationsTopicsListResponse:
        r"""Lists the topics attached to the specified reservation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}/topics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsReservationsTopicsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReservationTopicsResponse])
                res.list_reservation_topics_response = out

        return res

    
    def pubsublite_admin_projects_locations_subscriptions_create(self, request: operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest) -> operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse:
        r"""Creates a new subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{parent}/subscriptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    def pubsublite_admin_projects_locations_subscriptions_list(self, request: operations.PubsubliteAdminProjectsLocationsSubscriptionsListRequest) -> operations.PubsubliteAdminProjectsLocationsSubscriptionsListResponse:
        r"""Returns the list of subscriptions for the given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{parent}/subscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSubscriptionsResponse])
                res.list_subscriptions_response = out

        return res

    
    def pubsublite_admin_projects_locations_subscriptions_seek(self, request: operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest) -> operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse:
        r"""Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}:seek", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def pubsublite_admin_projects_locations_topics_create(self, request: operations.PubsubliteAdminProjectsLocationsTopicsCreateRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsCreateResponse:
        r"""Creates a new topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{parent}/topics", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsublite_admin_projects_locations_topics_delete(self, request: operations.PubsubliteAdminProjectsLocationsTopicsDeleteRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsDeleteResponse:
        r"""Deletes the specified topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsublite_admin_projects_locations_topics_get(self, request: operations.PubsubliteAdminProjectsLocationsTopicsGetRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsGetResponse:
        r"""Returns the topic configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsublite_admin_projects_locations_topics_get_partitions(self, request: operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsResponse:
        r"""Returns the partition information for the requested topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}/partitions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopicPartitions])
                res.topic_partitions = out

        return res

    
    def pubsublite_admin_projects_locations_topics_list(self, request: operations.PubsubliteAdminProjectsLocationsTopicsListRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsListResponse:
        r"""Returns the list of topics for the given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{parent}/topics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicsResponse])
                res.list_topics_response = out

        return res

    
    def pubsublite_admin_projects_locations_topics_patch(self, request: operations.PubsubliteAdminProjectsLocationsTopicsPatchRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsPatchResponse:
        r"""Updates properties of the specified topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsublite_admin_projects_locations_topics_subscriptions_list(self, request: operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListResponse:
        r"""Lists the subscriptions attached to the specified topic.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/admin/{name}/subscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicSubscriptionsResponse])
                res.list_topic_subscriptions_response = out

        return res

    