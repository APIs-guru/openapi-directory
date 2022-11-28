import requests
from typing import Optional
from sdk.models import operations
from . import utils

class PlacementGroups:
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

    
    def delete_placement_groups_id_(self, request: operations.DeletePlacementGroupsIDRequest) -> operations.DeletePlacementGroupsIDResponse:
        r"""Delete a PlacementGroup
        Deletes a PlacementGroup.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/placement_groups/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePlacementGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_placement_groups(self, request: operations.GetPlacementGroupsRequest) -> operations.GetPlacementGroupsResponse:
        r"""Get all PlacementGroups
        Returns all PlacementGroup objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/placement_groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlacementGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPlacementGroupsPlacementGroupsResponse])
                res.placement_groups_response = out

        return res

    
    def get_placement_groups_id_(self, request: operations.GetPlacementGroupsIDRequest) -> operations.GetPlacementGroupsIDResponse:
        r"""Get a PlacementGroup
        Gets a specific PlacementGroup object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/placement_groups/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlacementGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPlacementGroupsIDPlacementGroupResponse])
                res.placement_group_response = out

        return res

    
    def post_placement_groups(self, request: operations.PostPlacementGroupsRequest) -> operations.PostPlacementGroupsResponse:
        r"""Create a PlacementGroup
        Creates a new PlacementGroup.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/placement_groups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPlacementGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPlacementGroupsCreatePlacementGroupResponse])
                res.create_placement_group_response = out

        return res

    
    def put_placement_groups_id_(self, request: operations.PutPlacementGroupsIDRequest) -> operations.PutPlacementGroupsIDResponse:
        r"""Update a PlacementGroup
        Updates the PlacementGroup properties.
        
        Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/placement_groups/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPlacementGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutPlacementGroupsIDPlacementGroupResponse])
                res.placement_group_response = out

        return res

    