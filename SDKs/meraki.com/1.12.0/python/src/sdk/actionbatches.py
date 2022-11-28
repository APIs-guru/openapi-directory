import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class ActionBatches:
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

    
    def create_organization_action_batch(self, request: operations.CreateOrganizationActionBatchRequest) -> operations.CreateOrganizationActionBatchResponse:
        r"""Create an action batch
        Create an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_organization_action_batch_201_application_json_object = out

        return res

    
    def delete_organization_action_batch(self, request: operations.DeleteOrganizationActionBatchRequest) -> operations.DeleteOrganizationActionBatchResponse:
        r"""Delete an action batch
        Delete an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_organization_action_batch(self, request: operations.GetOrganizationActionBatchRequest) -> operations.GetOrganizationActionBatchResponse:
        r"""Return an action batch
        Return an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batch_200_application_json_object = out

        return res

    
    def get_organization_action_batches(self, request: operations.GetOrganizationActionBatchesRequest) -> operations.GetOrganizationActionBatchesResponse:
        r"""Return the list of action batches in the organization
        Return the list of action batches in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationActionBatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_action_batches_200_application_json_object = out

        return res

    
    def update_organization_action_batch(self, request: operations.UpdateOrganizationActionBatchRequest) -> operations.UpdateOrganizationActionBatchResponse:
        r"""Update an action batch
        Update an action batch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationActionBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_action_batch_200_application_json_object = out

        return res

    