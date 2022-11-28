import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class V3:
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

    
    def playablelocations_log_impressions(self, request: operations.PlayablelocationsLogImpressionsRequest) -> operations.PlayablelocationsLogImpressionsResponse:
        r"""Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3:logImpressions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayablelocationsLogImpressionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_maps_playablelocations_v3_log_impressions_response = out

        return res

    
    def playablelocations_log_player_reports(self, request: operations.PlayablelocationsLogPlayerReportsRequest) -> operations.PlayablelocationsLogPlayerReportsResponse:
        r"""Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3:logPlayerReports"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayablelocationsLogPlayerReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_maps_playablelocations_v3_log_player_reports_response = out

        return res

    
    def playablelocations_sample_playable_locations(self, request: operations.PlayablelocationsSamplePlayableLocationsRequest) -> operations.PlayablelocationsSamplePlayableLocationsResponse:
        r"""Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3:samplePlayableLocations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PlayablelocationsSamplePlayableLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse])
                res.google_maps_playablelocations_v3_sample_playable_locations_response = out

        return res

    