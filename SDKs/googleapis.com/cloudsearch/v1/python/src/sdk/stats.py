import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Stats:
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

    
    def cloudsearch_stats_get_index(self, request: operations.CloudsearchStatsGetIndexRequest) -> operations.CloudsearchStatsGetIndexResponse:
        r"""Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/index"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsGetIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomerIndexStatsResponse])
                res.get_customer_index_stats_response = out

        return res

    
    def cloudsearch_stats_get_query(self, request: operations.CloudsearchStatsGetQueryRequest) -> operations.CloudsearchStatsGetQueryResponse:
        r"""Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/query"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsGetQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomerQueryStatsResponse])
                res.get_customer_query_stats_response = out

        return res

    
    def cloudsearch_stats_get_searchapplication(self, request: operations.CloudsearchStatsGetSearchapplicationRequest) -> operations.CloudsearchStatsGetSearchapplicationResponse:
        r"""Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/searchapplication"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsGetSearchapplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomerSearchApplicationStatsResponse])
                res.get_customer_search_application_stats_response = out

        return res

    
    def cloudsearch_stats_get_session(self, request: operations.CloudsearchStatsGetSessionRequest) -> operations.CloudsearchStatsGetSessionResponse:
        r"""Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/session"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsGetSessionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomerSessionStatsResponse])
                res.get_customer_session_stats_response = out

        return res

    
    def cloudsearch_stats_get_user(self, request: operations.CloudsearchStatsGetUserRequest) -> operations.CloudsearchStatsGetUserResponse:
        r"""Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/stats/user"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsGetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomerUserStatsResponse])
                res.get_customer_user_stats_response = out

        return res

    
    def cloudsearch_stats_index_datasources_get(self, request: operations.CloudsearchStatsIndexDatasourcesGetRequest) -> operations.CloudsearchStatsIndexDatasourcesGetResponse:
        r"""Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/stats/index/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsIndexDatasourcesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDataSourceIndexStatsResponse])
                res.get_data_source_index_stats_response = out

        return res

    
    def cloudsearch_stats_query_searchapplications_get(self, request: operations.CloudsearchStatsQuerySearchapplicationsGetRequest) -> operations.CloudsearchStatsQuerySearchapplicationsGetResponse:
        r"""Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/stats/query/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsQuerySearchapplicationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSearchApplicationQueryStatsResponse])
                res.get_search_application_query_stats_response = out

        return res

    
    def cloudsearch_stats_session_searchapplications_get(self, request: operations.CloudsearchStatsSessionSearchapplicationsGetRequest) -> operations.CloudsearchStatsSessionSearchapplicationsGetResponse:
        r"""Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/stats/session/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsSessionSearchapplicationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSearchApplicationSessionStatsResponse])
                res.get_search_application_session_stats_response = out

        return res

    
    def cloudsearch_stats_user_searchapplications_get(self, request: operations.CloudsearchStatsUserSearchapplicationsGetRequest) -> operations.CloudsearchStatsUserSearchapplicationsGetResponse:
        r"""Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/stats/user/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudsearchStatsUserSearchapplicationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSearchApplicationUserStatsResponse])
                res.get_search_application_user_stats_response = out

        return res

    