

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://webtris.highwaysengland.co.uk/api",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def areas_get(self, request: operations.AreasGetRequest) -> operations.AreasGetResponse:
        r"""Returns list of areas
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/areas", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AreasGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AreaResponse])
                res.area_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v_version_areas_area_ids_(self, request: operations.GetVVersionAreasAreaIdsRequest) -> operations.GetVVersionAreasAreaIdsResponse:
        r"""Returns details of selected area
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/areas/{area_Ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVVersionAreasAreaIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AreaResponse])
                res.area_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v_version_reports_start_date_to_end_date_report_type_(self, request: operations.GetVVersionReportsStartDateToEndDateReportTypeRequest) -> operations.GetVVersionReportsStartDateToEndDateReportTypeResponse:
        r"""Gets the daily report.
        Get's the report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/reports/{start_date}/to/{end_date}/{report_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVVersionReportsStartDateToEndDateReportTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_v_version_sites_site_ids_(self, request: operations.GetVVersionSitesSiteIdsRequest) -> operations.GetVVersionSitesSiteIdsResponse:
        r"""Get selected sites
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/sites/{site_Ids}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVVersionSitesSiteIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteResponse])
                res.site_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def quality_get_daily_data_quality_for_site(self, request: operations.QualityGetDailyDataQualityForSiteRequest) -> operations.QualityGetDailyDataQualityForSiteResponse:
        r"""Get Site DailyQuality
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/quality/daily", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QualityGetDailyDataQualityForSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DailyQualityResponse])
                res.daily_quality_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def quality_get_overall_data_quality_for_sites(self, request: operations.QualityGetOverallDataQualityForSitesRequest) -> operations.QualityGetOverallDataQualityForSitesResponse:
        r"""Get Site OverallQuality
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/quality/overall", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QualityGetOverallDataQualityForSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OverallQualityResponse])
                res.overall_quality_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def reports_index(self, request: operations.ReportsIndexRequest) -> operations.ReportsIndexResponse:
        r"""Gets the daily report.
        Get's the report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/reports/{report_type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportsIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def site_types_get_sites_for_public_facing_api(self, request: operations.SiteTypesGetSitesForPublicFacingAPIRequest) -> operations.SiteTypesGetSitesForPublicFacingAPIResponse:
        r"""Returns the layer metadata for the LayerId specified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/sitetypes/{siteType_Id}/sites", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteTypesGetSitesForPublicFacingAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteTypeLayer])
                res.site_type_layer = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def site_types_index(self, request: operations.SiteTypesIndexRequest) -> operations.SiteTypesIndexResponse:
        r"""Return list of site types
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/sitetypes", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SiteTypesIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteTypeResponse])
                res.site_type_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def sites_index(self, request: operations.SitesIndexRequest) -> operations.SitesIndexResponse:
        r"""Get a list of sites
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v{version}/sites", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SitesIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SiteResponse])
                res.site_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    