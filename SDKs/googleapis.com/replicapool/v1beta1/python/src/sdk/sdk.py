import warnings
import requests
from typing import List
from sdk.models import operations
from . import utils


SERVERS = [
	"https://www.googleapis.com/replicapool/v1beta1/projects",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def replicapool_pools_delete(self, request: operations.ReplicapoolPoolsDeleteRequest) -> operations.ReplicapoolPoolsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def replicapool_pools_get(self, request: operations.ReplicapoolPoolsGetRequest) -> operations.ReplicapoolPoolsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def replicapool_pools_insert(self, request: operations.ReplicapoolPoolsInsertRequest) -> operations.ReplicapoolPoolsInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsInsertResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def replicapool_pools_list(self, request: operations.ReplicapoolPoolsListRequest) -> operations.ReplicapoolPoolsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def replicapool_pools_resize(self, request: operations.ReplicapoolPoolsResizeRequest) -> operations.ReplicapoolPoolsResizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/resize", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsResizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def replicapool_pools_updatetemplate(self, request: operations.ReplicapoolPoolsUpdatetemplateRequest) -> operations.ReplicapoolPoolsUpdatetemplateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/updateTemplate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsUpdatetemplateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def replicapool_replicas_delete(self, request: operations.ReplicapoolReplicasDeleteRequest) -> operations.ReplicapoolReplicasDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolReplicasDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def replicapool_replicas_get(self, request: operations.ReplicapoolReplicasGetRequest) -> operations.ReplicapoolReplicasGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolReplicasGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def replicapool_replicas_list(self, request: operations.ReplicapoolReplicasListRequest) -> operations.ReplicapoolReplicasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/replicas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolReplicasListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def replicapool_replicas_restart(self, request: operations.ReplicapoolReplicasRestartRequest) -> operations.ReplicapoolReplicasRestartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolReplicasRestartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    