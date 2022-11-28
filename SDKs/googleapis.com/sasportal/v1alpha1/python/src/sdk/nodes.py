import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Nodes:
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

    
    def sasportal_nodes_devices_sign_device(self, request: operations.SasportalNodesDevicesSignDeviceRequest) -> operations.SasportalNodesDevicesSignDeviceResponse:
        r"""Signs a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:signDevice", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesDevicesSignDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sas_portal_empty = out

        return res

    
    def sasportal_nodes_devices_update_signed(self, request: operations.SasportalNodesDevicesUpdateSignedRequest) -> operations.SasportalNodesDevicesUpdateSignedResponse:
        r"""Updates a signed device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:updateSigned", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesDevicesUpdateSignedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalDevice])
                res.sas_portal_device = out

        return res

    
    def sasportal_nodes_nodes_delete(self, request: operations.SasportalNodesNodesDeleteRequest) -> operations.SasportalNodesNodesDeleteResponse:
        r"""Deletes a node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sas_portal_empty = out

        return res

    
    def sasportal_nodes_nodes_deployments_create(self, request: operations.SasportalNodesNodesDeploymentsCreateRequest) -> operations.SasportalNodesNodesDeploymentsCreateResponse:
        r"""Creates a new deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/deployments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesDeploymentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalDeployment])
                res.sas_portal_deployment = out

        return res

    
    def sasportal_nodes_nodes_deployments_list(self, request: operations.SasportalNodesNodesDeploymentsListRequest) -> operations.SasportalNodesNodesDeploymentsListResponse:
        r"""Lists deployments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalListDeploymentsResponse])
                res.sas_portal_list_deployments_response = out

        return res

    
    def sasportal_nodes_nodes_devices_create(self, request: operations.SasportalNodesNodesDevicesCreateRequest) -> operations.SasportalNodesNodesDevicesCreateResponse:
        r"""Creates a device under a node or customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/devices", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesDevicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalDevice])
                res.sas_portal_device = out

        return res

    
    def sasportal_nodes_nodes_devices_create_signed(self, request: operations.SasportalNodesNodesDevicesCreateSignedRequest) -> operations.SasportalNodesNodesDevicesCreateSignedResponse:
        r"""Creates a signed device under a node or customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/devices:createSigned", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesDevicesCreateSignedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalDevice])
                res.sas_portal_device = out

        return res

    
    def sasportal_nodes_nodes_devices_list(self, request: operations.SasportalNodesNodesDevicesListRequest) -> operations.SasportalNodesNodesDevicesListResponse:
        r"""Lists devices under a node or customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesDevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalListDevicesResponse])
                res.sas_portal_list_devices_response = out

        return res

    
    def sasportal_nodes_nodes_get(self, request: operations.SasportalNodesNodesGetRequest) -> operations.SasportalNodesNodesGetResponse:
        r"""Returns a requested node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalNode])
                res.sas_portal_node = out

        return res

    
    def sasportal_nodes_nodes_move(self, request: operations.SasportalNodesNodesMoveRequest) -> operations.SasportalNodesNodesMoveResponse:
        r"""Moves a node under another node or customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:move", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalOperation])
                res.sas_portal_operation = out

        return res

    
    def sasportal_nodes_nodes_nodes_create(self, request: operations.SasportalNodesNodesNodesCreateRequest) -> operations.SasportalNodesNodesNodesCreateResponse:
        r"""Creates a new node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/nodes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesNodesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalNode])
                res.sas_portal_node = out

        return res

    
    def sasportal_nodes_nodes_nodes_list(self, request: operations.SasportalNodesNodesNodesListRequest) -> operations.SasportalNodesNodesNodesListResponse:
        r"""Lists nodes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/nodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesNodesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalListNodesResponse])
                res.sas_portal_list_nodes_response = out

        return res

    
    def sasportal_nodes_nodes_patch(self, request: operations.SasportalNodesNodesPatchRequest) -> operations.SasportalNodesNodesPatchResponse:
        r"""Updates an existing node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SasportalNodesNodesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SasPortalNode])
                res.sas_portal_node = out

        return res

    