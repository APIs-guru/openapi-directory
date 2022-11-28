
__doc__ = """ SDK Documentation: http://developer.nytimes.com/"""
import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.nytimes.com/svc/books/v3",
]


class SDK:
    r"""SDK Documentation: http://developer.nytimes.com/"""

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
        
    
    
    
    def get_lists_best_sellers_history_json(self, request: operations.GetListsBestSellersHistoryJSONRequest) -> operations.GetListsBestSellersHistoryJSONResponse:
        r"""Best Seller History List
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lists/best-sellers/history.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListsBestSellersHistoryJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListsBestSellersHistoryJSON200ApplicationJSON])
                res.get_lists_best_sellers_history_json_200_application_json_object = out

        return res

    
    def get_lists_date_list_json(self, request: operations.GetListsDateListJSONRequest) -> operations.GetListsDateListJSONResponse:
        r"""Best Seller List by Date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lists/{date}/{list}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListsDateListJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListsDateListJSON200ApplicationJSON])
                res.get_lists_date_list_json_200_application_json_object = out

        return res

    
    def get_lists_format(self, request: operations.GetListsFormatRequest) -> operations.GetListsFormatResponse:
        r"""Best Seller List
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lists.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListsFormat200ApplicationJSON])
                res.get_lists_format_200_application_json_object = out

        return res

    
    def get_lists_names_format(self, request: operations.GetListsNamesFormatRequest) -> operations.GetListsNamesFormatResponse:
        r"""Best Seller List Names
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lists/names.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListsNamesFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListsNamesFormat200ApplicationJSON])
                res.get_lists_names_format_200_application_json_object = out

        return res

    
    def get_lists_overview_format(self, request: operations.GetListsOverviewFormatRequest) -> operations.GetListsOverviewFormatResponse:
        r"""Best Seller List Overview
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lists/overview.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListsOverviewFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListsOverviewFormat200ApplicationJSON])
                res.get_lists_overview_format_200_application_json_object = out

        return res

    
    def get_reviews_format(self, request: operations.GetReviewsFormatRequest) -> operations.GetReviewsFormatResponse:
        r"""Reviews
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reviews.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReviewsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetReviewsFormat200ApplicationJSON])
                res.get_reviews_format_200_application_json_object = out

        return res

    