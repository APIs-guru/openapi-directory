import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://mybusinessplaceactions.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def mybusinessplaceactions_locations_place_action_links_create(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/placeActionLinks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaceActionLink])
                res.place_action_link = out

        return res

    
    
    def mybusinessplaceactions_locations_place_action_links_delete(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def mybusinessplaceactions_locations_place_action_links_get(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksGetRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaceActionLink])
                res.place_action_link = out

        return res

    
    
    def mybusinessplaceactions_locations_place_action_links_list(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksListRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/placeActionLinks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPlaceActionLinksResponse])
                res.list_place_action_links_response = out

        return res

    
    
    def mybusinessplaceactions_locations_place_action_links_patch(self, request: operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest) -> operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaceActionLink])
                res.place_action_link = out

        return res

    
    
    def mybusinessplaceactions_place_action_type_metadata_list(self, request: operations.MybusinessplaceactionsPlaceActionTypeMetadataListRequest) -> operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/placeActionTypeMetadata"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPlaceActionTypeMetadataResponse])
                res.list_place_action_type_metadata_response = out

        return res

    