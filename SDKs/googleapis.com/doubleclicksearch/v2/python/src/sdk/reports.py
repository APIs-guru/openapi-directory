import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Reports:
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

    
    def doubleclicksearch_reports_generate(self, request: operations.DoubleclicksearchReportsGenerateRequest) -> operations.DoubleclicksearchReportsGenerateResponse:
        r"""Generates and returns a report immediately.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/doubleclicksearch/v2/reports/generate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchReportsGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    
    def doubleclicksearch_reports_get(self, request: operations.DoubleclicksearchReportsGetRequest) -> operations.DoubleclicksearchReportsGetResponse:
        r"""Polls for the status of a report request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/doubleclicksearch/v2/reports/{reportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchReportsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    
    def doubleclicksearch_reports_get_file(self, request: operations.DoubleclicksearchReportsGetFileRequest) -> operations.DoubleclicksearchReportsGetFileResponse:
        r"""Downloads a report file encoded in UTF-8.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchReportsGetFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def doubleclicksearch_reports_get_id_mapping_file(self, request: operations.DoubleclicksearchReportsGetIDMappingFileRequest) -> operations.DoubleclicksearchReportsGetIDMappingFileResponse:
        r"""Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/idmapping", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchReportsGetIDMappingFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.id_mapping_file = out

        return res

    
    def doubleclicksearch_reports_request(self, request: operations.DoubleclicksearchReportsRequestRequest) -> operations.DoubleclicksearchReportsRequestResponse:
        r"""Inserts a report request into the reporting system.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/doubleclicksearch/v2/reports"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchReportsRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    