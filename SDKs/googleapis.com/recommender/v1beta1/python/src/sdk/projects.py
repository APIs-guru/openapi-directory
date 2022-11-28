import requests
from typing import Optional
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

    
    def recommender_projects_locations_insight_types_insights_list(self, request: operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest) -> operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse:
        r"""Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/insights", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1ListInsightsResponse])
                res.google_cloud_recommender_v1beta1_list_insights_response = out

        return res

    
    def recommender_projects_locations_insight_types_insights_mark_accepted(self, request: operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest) -> operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse:
        r"""Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:markAccepted", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1Insight])
                res.google_cloud_recommender_v1beta1_insight = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_get(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsGetRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse:
        r"""Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1Recommendation])
                res.google_cloud_recommender_v1beta1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_list(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsListRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse:
        r"""Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/recommendations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1ListRecommendationsResponse])
                res.google_cloud_recommender_v1beta1_list_recommendations_response = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_mark_claimed(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse:
        r"""Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:markClaimed", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1Recommendation])
                res.google_cloud_recommender_v1beta1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_mark_failed(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse:
        r"""Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:markFailed", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1Recommendation])
                res.google_cloud_recommender_v1beta1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_recommendations_mark_succeeded(self, request: operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest) -> operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse:
        r"""Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:markSucceeded", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1Recommendation])
                res.google_cloud_recommender_v1beta1_recommendation = out

        return res

    
    def recommender_projects_locations_recommenders_update_config(self, request: operations.RecommenderProjectsLocationsRecommendersUpdateConfigRequest) -> operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse:
        r"""Updates a Recommender Config. This will create a new revision of the config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecommenderV1beta1RecommenderConfig])
                res.google_cloud_recommender_v1beta1_recommender_config = out

        return res

    