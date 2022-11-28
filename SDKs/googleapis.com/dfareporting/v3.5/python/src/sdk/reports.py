import requests
from typing import Optional
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

    
    def dfareporting_reports_compatible_fields_query(self, request: operations.DfareportingReportsCompatibleFieldsQueryRequest) -> operations.DfareportingReportsCompatibleFieldsQueryResponse:
        r"""Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/compatiblefields/query", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsCompatibleFieldsQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompatibleFields])
                res.compatible_fields = out

        return res

    
    def dfareporting_reports_delete(self, request: operations.DfareportingReportsDeleteRequest) -> operations.DfareportingReportsDeleteResponse:
        r"""Deletes a report by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/{reportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dfareporting_reports_files_get(self, request: operations.DfareportingReportsFilesGetRequest) -> operations.DfareportingReportsFilesGetResponse:
        r"""Retrieves a report file by its report ID and file ID. This method supports media download.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/{reportId}/files/{fileId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsFilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def dfareporting_reports_files_list(self, request: operations.DfareportingReportsFilesListRequest) -> operations.DfareportingReportsFilesListResponse:
        r"""Lists files for a report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/{reportId}/files", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileList])
                res.file_list = out

        return res

    
    def dfareporting_reports_get(self, request: operations.DfareportingReportsGetRequest) -> operations.DfareportingReportsGetResponse:
        r"""Retrieves a report by its ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/{reportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    
    def dfareporting_reports_insert(self, request: operations.DfareportingReportsInsertRequest) -> operations.DfareportingReportsInsertResponse:
        r"""Creates a report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    
    def dfareporting_reports_list(self, request: operations.DfareportingReportsListRequest) -> operations.DfareportingReportsListResponse:
        r"""Retrieves list of reports.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportList])
                res.report_list = out

        return res

    
    def dfareporting_reports_patch(self, request: operations.DfareportingReportsPatchRequest) -> operations.DfareportingReportsPatchResponse:
        r"""Updates an existing report. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/{reportId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    
    def dfareporting_reports_run(self, request: operations.DfareportingReportsRunRequest) -> operations.DfareportingReportsRunResponse:
        r"""Runs a report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/{reportId}/run", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.File])
                res.file = out

        return res

    
    def dfareporting_reports_update(self, request: operations.DfareportingReportsUpdateRequest) -> operations.DfareportingReportsUpdateResponse:
        r"""Updates a report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/reports/{reportId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingReportsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    