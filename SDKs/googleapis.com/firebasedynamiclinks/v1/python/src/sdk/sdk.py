import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://firebasedynamiclinks.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def firebasedynamiclinks_get_link_stats(self, request: operations.FirebasedynamiclinksGetLinkStatsRequest) -> operations.FirebasedynamiclinksGetLinkStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{dynamicLink}/linkStats", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksGetLinkStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DynamicLinkStats])
                res.dynamic_link_stats = out

        return res

    
    def firebasedynamiclinks_install_attribution(self, request: operations.FirebasedynamiclinksInstallAttributionRequest) -> operations.FirebasedynamiclinksInstallAttributionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/installAttribution"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksInstallAttributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetIosPostInstallAttributionResponse])
                res.get_ios_post_install_attribution_response = out

        return res

    
    def firebasedynamiclinks_managed_short_links_create(self, request: operations.FirebasedynamiclinksManagedShortLinksCreateRequest) -> operations.FirebasedynamiclinksManagedShortLinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/managedShortLinks:create"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksManagedShortLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateManagedShortLinkResponse])
                res.create_managed_short_link_response = out

        return res

    
    def firebasedynamiclinks_reopen_attribution(self, request: operations.FirebasedynamiclinksReopenAttributionRequest) -> operations.FirebasedynamiclinksReopenAttributionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/reopenAttribution"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksReopenAttributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetIosReopenAttributionResponse])
                res.get_ios_reopen_attribution_response = out

        return res

    
    def firebasedynamiclinks_short_links_create(self, request: operations.FirebasedynamiclinksShortLinksCreateRequest) -> operations.FirebasedynamiclinksShortLinksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/shortLinks"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksShortLinksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateShortDynamicLinkResponse])
                res.create_short_dynamic_link_response = out

        return res

    