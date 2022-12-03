import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Applications:
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

    
    def get_applications_application_id(self, request: operations.GetApplicationsApplicationIDRequest) -> operations.GetApplicationsApplicationIDResponse:
        r"""/applications/{application_id}
        ### Get an application
        
        Get the latest details for a specific [application](https://www.heraldapi.com/docs/dynamic-application-steps).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{application_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetApplicationsApplicationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetApplicationsApplicationID200ApplicationJSON])
                res.get_applications_application_id_200_application_json_object = out

        return res

    
    def post_applications(self, request: operations.PostApplicationsRequest) -> operations.PostApplicationsResponse:
        r"""/applications
        ### Create an application
        
        Create an [application](https://www.heraldapi.com/docs/dynamic-application) for a product or set of products. An application contains the set of information a carrier requires to get a quote for the product(s). Submitting only `products` will create a blank application. Including values when creating the application is optional. 
        
        Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/applications"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostApplicationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostApplications200ApplicationJSON])
                res.post_applications_200_application_json_object = out

        return res

    
    def put_applications_application_id(self, request: operations.PutApplicationsApplicationIDRequest) -> operations.PutApplicationsApplicationIDResponse:
        r"""/applications/{application_id}
        <h3>Update an application</h3>
        
        Submit values for a specific application. In order to submit an application for a quote, you need to continue to update the application until the status is `complete`.
        
        Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{application_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutApplicationsApplicationIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutApplicationsApplicationID200ApplicationJSON])
                res.put_applications_application_id_200_application_json_object = out

        return res

    