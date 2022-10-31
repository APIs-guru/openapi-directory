import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://recommender.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def recommender_projects_locations_insight_types_insights_list(self, request: operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest) -> operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/insights", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1ListInsightsResponse])
                res.google_cloud_recommender_v1_list_insights_response = out

        return res

    
    def recommender_projects_locations_insight_types_insights_mark_accepted(self, request: operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest) -> operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:markAccepted", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1Insight])
                res.google_cloud_recommender_v1_insight = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_get(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsGetRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1Recommendation])
                res.google_cloud_recommender_v1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_list(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsListRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/recommendations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1ListRecommendationsResponse])
                res.google_cloud_recommender_v1_list_recommendations_response = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_mark_claimed(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:markClaimed", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1Recommendation])
                res.google_cloud_recommender_v1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_mark_failed(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:markFailed", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1Recommendation])
                res.google_cloud_recommender_v1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_mark_succeeded(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:markSucceeded", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1Recommendation])
                res.google_cloud_recommender_v1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_update_config(self, request: operations.RecommenderProjectsLocationsRecommendersUpdateConfigRequest) -> operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1RecommenderConfig])
                res.google_cloud_recommender_v1_recommender_config = out

        return res

    