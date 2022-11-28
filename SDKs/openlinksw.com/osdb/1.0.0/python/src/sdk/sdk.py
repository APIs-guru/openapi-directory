

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://osdb.openlinksw.com/osdb",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def action_help(self, request: operations.ActionHelpRequest) -> operations.ActionHelpResponse:
        r"""Action help
        Returns the help text for a given service action
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/actions/{serviceId}/{actionId}/help", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActionHelpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionHelpResponse])
                res.action_help_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def describe_action(self, request: operations.DescribeActionRequest) -> operations.DescribeActionResponse:
        r"""Describe action
        Returns a description of a given service action.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/actions/{serviceId}/{actionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeActionResponse])
                res.describe_action_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def describe_service(self, request: operations.DescribeServiceRequest) -> operations.DescribeServiceResponse:
        r"""Describe service
        Returns a description of a given service
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/services/{serviceId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeServiceResponse])
                res.describe_service_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def execute_action(self, request: operations.ExecuteActionRequest) -> operations.ExecuteActionResponse:
        r"""Execute action
        Executes a registered service action and returns any output from the action.
        The data returned in the POST response body may be: 
        * the raw action output, 
        * a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET), 
        * RDF generated from the action output,
        * a URL to an RDF viewer's display of the generated RDF.
        
        Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: \"query\", \"header\", \"uri\", \"path\" and \"body\".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>
        
        **Examples**
        * ```curl -ik -X POST -d '{ \"latitude\":\"37.7759792\", \"longitude\":\"-122.41823\" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```  
        * ```curl -ikL -X POST -d '{ \"latitude\":\"37.7759792\", \"longitude\":\"-122.41823\", \"osdb:output_type\":\"generate_rdf\", \"osdb:response_format\":\"application/rdf+xml\" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
        * ```curl -ikL -X POST -d '{ \"latitude\":\"37.7759792\", \"longitude\":\"-122.41823\", \"osdb:output_type\":\"display_rdf\" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec``` 
        * ```curl -ik -X POST -d '{ \"q\":\"skiing\", \"osdb:response_format\": \"application/rdf+xml\" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
        * ```curl -ik -X POST -d '{ \"q\":\"skiing\", \"osdb:output_type\": \"url_only\" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec``` 
        * ```curl -ik -X POST -d '{ \"Content-Location\": \"http://demo.openlinksw.co.uk/pubs\", \"osdb:body_data_src_url\": \"http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv\", \"extractor\": \"csv\", \"osdb:response_format\": \"application/rdf+xml\", \"osdb:body_data_encoding\": \"text/csv\" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/actions/{serviceId}/{actionId}/exec", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExecuteActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def list_actions(self, request: operations.ListActionsRequest) -> operations.ListActionsResponse:
        r"""List actions
        Returns an array of action descriptions for the actions supported by the given service
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/actions/{serviceId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListActionsResponse])
                res.list_actions_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def list_services(self) -> operations.ListServicesResponse:
        r"""List services
        Returns descriptions of all services registered with the OSDB server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/services"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServicesResponse])
                res.list_services_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def load_service(self, request: operations.LoadServiceRequest) -> operations.LoadServiceResponse:
        r"""Load service
        Loads a service description into the OSDB Service Registry
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/services"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LoadServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.LoadService200ApplicationJSON])
                res.load_service_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def login(self) -> operations.LoginResponse:
        r"""Login
        Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/login"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoginResponse])
                res.login_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def logout(self) -> operations.LogoutResponse:
        r"""Logout
        Logs a user out of the OSDB server, ending their OSDB session
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/logout"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LogoutResponse])
                res.logout_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    
    def unload_service(self, request: operations.UnloadServiceRequest) -> operations.UnloadServiceResponse:
        r"""Unload service
        Removes a service description from the OSDB Service Registry
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/services/{serviceId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnloadServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UnloadService200ApplicationJSON])
                res.unload_service_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorModel])
                res.error_model = out

        return res

    