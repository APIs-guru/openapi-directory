import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://safebrowsing.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def safebrowsing_encoded_full_hashes_get(self, request: operations.SafebrowsingEncodedFullHashesGetRequest) -> operations.SafebrowsingEncodedFullHashesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/encodedFullHashes/{encodedRequest}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingEncodedFullHashesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse])
                res.google_security_safebrowsing_v4_find_full_hashes_response = out

        return res

    
    def safebrowsing_encoded_updates_get(self, request: operations.SafebrowsingEncodedUpdatesGetRequest) -> operations.SafebrowsingEncodedUpdatesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v4/encodedUpdates/{encodedRequest}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingEncodedUpdatesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse])
                res.google_security_safebrowsing_v4_fetch_threat_list_updates_response = out

        return res

    
    def safebrowsing_full_hashes_find(self, request: operations.SafebrowsingFullHashesFindRequest) -> operations.SafebrowsingFullHashesFindResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v4/fullHashes:find"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingFullHashesFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse])
                res.google_security_safebrowsing_v4_find_full_hashes_response = out

        return res

    
    def safebrowsing_threat_hits_create(self, request: operations.SafebrowsingThreatHitsCreateRequest) -> operations.SafebrowsingThreatHitsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v4/threatHits"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingThreatHitsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def safebrowsing_threat_list_updates_fetch(self, request: operations.SafebrowsingThreatListUpdatesFetchRequest) -> operations.SafebrowsingThreatListUpdatesFetchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v4/threatListUpdates:fetch"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingThreatListUpdatesFetchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse])
                res.google_security_safebrowsing_v4_fetch_threat_list_updates_response = out

        return res

    
    def safebrowsing_threat_lists_list(self, request: operations.SafebrowsingThreatListsListRequest) -> operations.SafebrowsingThreatListsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v4/threatLists"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingThreatListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSecuritySafebrowsingV4ListThreatListsResponse])
                res.google_security_safebrowsing_v4_list_threat_lists_response = out

        return res

    
    def safebrowsing_threat_matches_find(self, request: operations.SafebrowsingThreatMatchesFindRequest) -> operations.SafebrowsingThreatMatchesFindResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v4/threatMatches:find"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SafebrowsingThreatMatchesFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleSecuritySafebrowsingV4FindThreatMatchesResponse])
                res.google_security_safebrowsing_v4_find_threat_matches_response = out

        return res

    