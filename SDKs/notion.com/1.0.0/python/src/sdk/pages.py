import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Pages:
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

    
    def retrieve_a_page(self, request: operations.RetrieveAPageRequest) -> operations.RetrieveAPageResponse:
        r"""Retrieve a Page
        Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/pages/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveAPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveAPage200ApplicationJSON])
                res.retrieve_a_page_200_application_json_object = out

        return res

    
    def update_page_properties(self, request: operations.UpdatePagePropertiesRequest) -> operations.UpdatePagePropertiesResponse:
        r"""Update Page properties 
        Updates a page by setting the values of any properties specified in the JSON body of the request. Properties not updated via parameters will remain unchanged. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/pages/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePagePropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdatePageProperties200ApplicationJSON])
                res.update_page_properties_200_application_json_object = out

        return res

    