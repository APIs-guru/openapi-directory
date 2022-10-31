import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://mybusinessbusinesscalls.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def mybusinessbusinesscalls_locations_businesscallsinsights_list(self, request: operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest) -> operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/businesscallsinsights", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBusinessCallsInsightsResponse])
                res.list_business_calls_insights_response = out

        return res

    
    def mybusinessbusinesscalls_locations_get_businesscallssettings(self, request: operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest) -> operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessCallsSettings])
                res.business_calls_settings = out

        return res

    
    def mybusinessbusinesscalls_locations_update_businesscallssettings(self, request: operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest) -> operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessCallsSettings])
                res.business_calls_settings = out

        return res

    