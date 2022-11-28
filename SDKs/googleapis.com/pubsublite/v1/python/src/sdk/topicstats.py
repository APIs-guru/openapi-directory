import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TopicStats:
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

    
    def pubsublite_topic_stats_projects_locations_topics_compute_head_cursor(self, request: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorRequest) -> operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse:
        r"""Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/topicStats/{topic}:computeHeadCursor", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputeHeadCursorResponse])
                res.compute_head_cursor_response = out

        return res

    
    def pubsublite_topic_stats_projects_locations_topics_compute_message_stats(self, request: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsRequest) -> operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse:
        r"""Compute statistics about a range of messages in a given topic and partition.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/topicStats/{topic}:computeMessageStats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeMessageStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputeMessageStatsResponse])
                res.compute_message_stats_response = out

        return res

    
    def pubsublite_topic_stats_projects_locations_topics_compute_time_cursor(self, request: operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest) -> operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse:
        r"""Compute the corresponding cursor for a publish or event time in a topic partition.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/topicStats/{topic}:computeTimeCursor", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComputeTimeCursorResponse])
                res.compute_time_cursor_response = out

        return res

    