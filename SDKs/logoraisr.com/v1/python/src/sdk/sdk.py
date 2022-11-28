

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.logoraisr.com/rest-v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def previews_read(self, request: operations.PreviewsReadRequest) -> operations.PreviewsReadResponse:
        r"""Get preview image of uploaded file
        This GET-Method returns the URL where the preview image of uploaded file can downloaded from.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/previews/{file_id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PreviewsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviewResponse])
                res.preview_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def processes_list(self) -> operations.ProcessesListResponse:
        r"""Get process list.
        This GET-Method lists all on logoraisr available processes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/processes/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProcessesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Process])
                res.process = out

        return res

    
    def projects_create(self, request: operations.ProjectsCreateRequest) -> operations.ProjectsCreateResponse:
        r"""Create a new project.
        This POST-Method creates a new project.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectResponse])
                res.project_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def projects_list(self) -> operations.ProjectsListResponse:
        r"""Get user project list.
        This GET-Method lists the user's projects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def projects_read(self, request: operations.ProjectsReadRequest) -> operations.ProjectsReadResponse:
        r"""Get project details.
        This GET-Method returns a specific project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{project_number}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProjectsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reports_create(self, request: operations.ReportsCreateRequest) -> operations.ReportsCreateResponse:
        r"""Create a new report.
        This POST-Method creates a new report.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportResponse])
                res.report_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def reports_list(self) -> operations.ReportsListResponse:
        r"""Get user report list.
        This GET method lists the user's reports.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports/"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reports_read(self, request: operations.ReportsReadRequest) -> operations.ReportsReadResponse:
        r"""Get report details.
        This GET-Method returns the details of a specific report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reports/{report_number}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def results_read(self, request: operations.ResultsReadRequest) -> operations.ResultsReadResponse:
        r"""Get the result from image processing
        This GET-Method returns the URL where the result can downloaded from.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/results/{result_file_id}/", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResultsReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResultResponse])
                res.result_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def uploads_create(self, request: operations.UploadsCreateRequest) -> operations.UploadsCreateResponse:
        r"""Upload a new image
        This POST-Method uploads a new file on the server.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/uploads/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileResponse])
                res.file_response = out
        elif r.status_code == 400:
            pass

        return res

    