import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Queries:
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

    
    def doubleclickbidmanager_queries_create(self, request: operations.DoubleclickbidmanagerQueriesCreateRequest) -> operations.DoubleclickbidmanagerQueriesCreateResponse:
        r"""Creates a query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/queries"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclickbidmanagerQueriesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Query])
                res.query = out

        return res

    
    def doubleclickbidmanager_queries_delete(self, request: operations.DoubleclickbidmanagerQueriesDeleteRequest) -> operations.DoubleclickbidmanagerQueriesDeleteResponse:
        r"""Deletes a query as well as the associated reports.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{queryId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclickbidmanagerQueriesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def doubleclickbidmanager_queries_get(self, request: operations.DoubleclickbidmanagerQueriesGetRequest) -> operations.DoubleclickbidmanagerQueriesGetResponse:
        r"""Retrieves a query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{queryId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclickbidmanagerQueriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Query])
                res.query = out

        return res

    
    def doubleclickbidmanager_queries_list(self, request: operations.DoubleclickbidmanagerQueriesListRequest) -> operations.DoubleclickbidmanagerQueriesListResponse:
        r"""Lists queries created by the current user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/queries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclickbidmanagerQueriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListQueriesResponse])
                res.list_queries_response = out

        return res

    
    def doubleclickbidmanager_queries_reports_get(self, request: operations.DoubleclickbidmanagerQueriesReportsGetRequest) -> operations.DoubleclickbidmanagerQueriesReportsGetResponse:
        r"""Retrieves a report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{queryId}/reports/{reportId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclickbidmanagerQueriesReportsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    
    def doubleclickbidmanager_queries_reports_list(self, request: operations.DoubleclickbidmanagerQueriesReportsListRequest) -> operations.DoubleclickbidmanagerQueriesReportsListResponse:
        r"""Lists reports associated with a query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{queryId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclickbidmanagerQueriesReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReportsResponse])
                res.list_reports_response = out

        return res

    
    def doubleclickbidmanager_queries_run(self, request: operations.DoubleclickbidmanagerQueriesRunRequest) -> operations.DoubleclickbidmanagerQueriesRunResponse:
        r"""Runs a stored query to generate a report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/queries/{queryId}:run", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclickbidmanagerQueriesRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out

        return res

    