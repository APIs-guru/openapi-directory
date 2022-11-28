import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Promooffer:
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

    
    def books_promooffer_accept(self, request: operations.BooksPromoofferAcceptRequest) -> operations.BooksPromoofferAcceptResponse:
        r"""Accepts the promo offer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/promooffer/accept"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksPromoofferAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_promooffer_dismiss(self, request: operations.BooksPromoofferDismissRequest) -> operations.BooksPromoofferDismissResponse:
        r"""Marks the promo offer as dismissed.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/promooffer/dismiss"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksPromoofferDismissResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_promooffer_get(self, request: operations.BooksPromoofferGetRequest) -> operations.BooksPromoofferGetResponse:
        r"""Returns a list of promo offers available to the user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/promooffer/get"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksPromoofferGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Offers])
                res.offers = out

        return res

    