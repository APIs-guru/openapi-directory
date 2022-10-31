import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://pubsublite.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def pubsublite_admin_projects_locations_operations_cancel(self, request: operations.PubsubliteAdminProjectsLocationsOperationsCancelRequest) -> operations.PubsubliteAdminProjectsLocationsOperationsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}:cancel", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsublite_admin_projects_locations_operations_list(self, request: operations.PubsubliteAdminProjectsLocationsOperationsListRequest) -> operations.PubsubliteAdminProjectsLocationsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}/operations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def pubsublite_admin_projects_locations_reservations_create(self, request: operations.PubsubliteAdminProjectsLocationsReservationsCreateRequest) -> operations.PubsubliteAdminProjectsLocationsReservationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{parent}/reservations", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsReservationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reservation])
                res.reservation = out

        return res

    
    def pubsublite_admin_projects_locations_reservations_list(self, request: operations.PubsubliteAdminProjectsLocationsReservationsListRequest) -> operations.PubsubliteAdminProjectsLocationsReservationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{parent}/reservations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsReservationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReservationsResponse])
                res.list_reservations_response = out

        return res

    
    def pubsublite_admin_projects_locations_reservations_topics_list(self, request: operations.PubsubliteAdminProjectsLocationsReservationsTopicsListRequest) -> operations.PubsubliteAdminProjectsLocationsReservationsTopicsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}/topics", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsReservationsTopicsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReservationTopicsResponse])
                res.list_reservation_topics_response = out

        return res

    
    def pubsublite_admin_projects_locations_subscriptions_create(self, request: operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateRequest) -> operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{parent}/subscriptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Subscription])
                res.subscription = out

        return res

    
    def pubsublite_admin_projects_locations_subscriptions_list(self, request: operations.PubsubliteAdminProjectsLocationsSubscriptionsListRequest) -> operations.PubsubliteAdminProjectsLocationsSubscriptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{parent}/subscriptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSubscriptionsResponse])
                res.list_subscriptions_response = out

        return res

    
    def pubsublite_admin_projects_locations_subscriptions_seek(self, request: operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekRequest) -> operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}:seek", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsSubscriptionsSeekResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def pubsublite_admin_projects_locations_topics_create(self, request: operations.PubsubliteAdminProjectsLocationsTopicsCreateRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{parent}/topics", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsublite_admin_projects_locations_topics_delete(self, request: operations.PubsubliteAdminProjectsLocationsTopicsDeleteRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def pubsublite_admin_projects_locations_topics_get(self, request: operations.PubsubliteAdminProjectsLocationsTopicsGetRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsublite_admin_projects_locations_topics_get_partitions(self, request: operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}/partitions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsGetPartitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopicPartitions])
                res.topic_partitions = out

        return res

    
    def pubsublite_admin_projects_locations_topics_list(self, request: operations.PubsubliteAdminProjectsLocationsTopicsListRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{parent}/topics", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicsResponse])
                res.list_topics_response = out

        return res

    
    def pubsublite_admin_projects_locations_topics_patch(self, request: operations.PubsubliteAdminProjectsLocationsTopicsPatchRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Topic])
                res.topic = out

        return res

    
    def pubsublite_admin_projects_locations_topics_subscriptions_list(self, request: operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListRequest) -> operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/admin/{name}/subscriptions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteAdminProjectsLocationsTopicsSubscriptionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTopicSubscriptionsResponse])
                res.list_topic_subscriptions_response = out

        return res

    
    def pubsublite_cursor_projects_locations_subscriptions_commit_cursor(self, request: operations.PubsubliteCursorProjectsLocationsSubscriptionsCommitCursorRequest) -> operations.PubsubliteCursorProjectsLocationsSubscriptionsCommitCursorResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/cursor/{subscription}:commitCursor", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteCursorProjectsLocationsSubscriptionsCommitCursorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.commit_cursor_response = out

        return res

    
    def pubsublite_cursor_projects_locations_subscriptions_cursors_list(self, request: operations.PubsubliteCursorProjectsLocationsSubscriptionsCursorsListRequest) -> operations.PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/cursor/{parent}/cursors", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteCursorProjectsLocationsSubscriptionsCursorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPartitionCursorsResponse])
                res.list_partition_cursors_response = out

        return res

    
    def pubsublite_topic_stats_projects_locations_topics_compute_head_cursor(self, request: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorRequest) -> operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/topicStats/{topic}:computeHeadCursor", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputeHeadCursorResponse])
                res.compute_head_cursor_response = out

        return res

    
    def pubsublite_topic_stats_projects_locations_topics_compute_message_stats(self, request: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest) -> operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/topicStats/{topic}:computeMessageStats", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputeMessageStatsResponse])
                res.compute_message_stats_response = out

        return res

    
    def pubsublite_topic_stats_projects_locations_topics_compute_time_cursor(self, request: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest) -> operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/topicStats/{topic}:computeTimeCursor", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputeTimeCursorResponse])
                res.compute_time_cursor_response = out

        return res

    