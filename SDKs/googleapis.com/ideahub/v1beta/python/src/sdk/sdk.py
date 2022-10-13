import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://ideahub.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def ideahub_platforms_properties_idea_activities_create(self, request: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest) -> operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/ideaActivities", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSearchIdeahubV1betaIdeaActivity])
                res.google_search_ideahub_v1beta_idea_activity = out

        return res

    
    
    def ideahub_platforms_properties_ideas_list(self, request: operations.IdeahubPlatformsPropertiesIdeasListRequest) -> operations.IdeahubPlatformsPropertiesIdeasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/ideas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdeahubPlatformsPropertiesIdeasListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSearchIdeahubV1betaListIdeasResponse])
                res.google_search_ideahub_v1beta_list_ideas_response = out

        return res

    
    
    def ideahub_platforms_properties_locales_list(self, request: operations.IdeahubPlatformsPropertiesLocalesListRequest) -> operations.IdeahubPlatformsPropertiesLocalesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/locales", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdeahubPlatformsPropertiesLocalesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSearchIdeahubV1betaListAvailableLocalesResponse])
                res.google_search_ideahub_v1beta_list_available_locales_response = out

        return res

    
    
    def ideahub_platforms_properties_topic_states_patch(self, request: operations.IdeahubPlatformsPropertiesTopicStatesPatchRequest) -> operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSearchIdeahubV1betaTopicState])
                res.google_search_ideahub_v1beta_topic_state = out

        return res

    