import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://domainsrdap.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def domainsrdap_autnum_get(self, request: operations.DomainsrdapAutnumGetRequest) -> operations.DomainsrdapAutnumGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/autnum/{autnumId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapAutnumGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_domain_get(self, request: operations.DomainsrdapDomainGetRequest) -> operations.DomainsrdapDomainGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/domain/{domainName}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapDomainGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def domainsrdap_entity_get(self, request: operations.DomainsrdapEntityGetRequest) -> operations.DomainsrdapEntityGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/entity/{entityId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapEntityGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_get_domains(self, request: operations.DomainsrdapGetDomainsRequest) -> operations.DomainsrdapGetDomainsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/domains"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_get_entities(self, request: operations.DomainsrdapGetEntitiesRequest) -> operations.DomainsrdapGetEntitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/entities"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_get_help(self, request: operations.DomainsrdapGetHelpRequest) -> operations.DomainsrdapGetHelpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/help"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetHelpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def domainsrdap_get_ip(self, request: operations.DomainsrdapGetIPRequest) -> operations.DomainsrdapGetIPResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/ip"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    def domainsrdap_get_nameservers(self, request: operations.DomainsrdapGetNameserversRequest) -> operations.DomainsrdapGetNameserversResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/nameservers"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapGetNameserversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_ip_get(self, request: operations.DomainsrdapIPGetRequest) -> operations.DomainsrdapIPGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/ip/{ipId}/{ipId1}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapIPGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    
    def domainsrdap_nameserver_get(self, request: operations.DomainsrdapNameserverGetRequest) -> operations.DomainsrdapNameserverGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/nameserver/{nameserverId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DomainsrdapNameserverGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RdapResponse])
                res.rdap_response = out

        return res

    