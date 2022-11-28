import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Buyers:
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

    
    def realtimebidding_buyers_creatives_create(self, request: operations.RealtimebiddingBuyersCreativesCreateRequest) -> operations.RealtimebiddingBuyersCreativesCreateResponse:
        r"""Creates a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/creatives", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersCreativesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def realtimebidding_buyers_creatives_list(self, request: operations.RealtimebiddingBuyersCreativesListRequest) -> operations.RealtimebiddingBuyersCreativesListResponse:
        r"""Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/creatives", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativesResponse])
                res.list_creatives_response = out

        return res

    
    def realtimebidding_buyers_creatives_patch(self, request: operations.RealtimebiddingBuyersCreativesPatchRequest) -> operations.RealtimebiddingBuyersCreativesPatchResponse:
        r"""Updates a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersCreativesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def realtimebidding_buyers_list(self, request: operations.RealtimebiddingBuyersListRequest) -> operations.RealtimebiddingBuyersListResponse:
        r"""Lists all buyer account information the calling buyer user or service account is permissioned to manage.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/buyers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBuyersResponse])
                res.list_buyers_response = out

        return res

    
    def realtimebidding_buyers_user_lists_close(self, request: operations.RealtimebiddingBuyersUserListsCloseRequest) -> operations.RealtimebiddingBuyersUserListsCloseResponse:
        r"""Change the status of a user list to CLOSED. This prevents new users from being added to the user list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:close", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersUserListsCloseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    
    def realtimebidding_buyers_user_lists_create(self, request: operations.RealtimebiddingBuyersUserListsCreateRequest) -> operations.RealtimebiddingBuyersUserListsCreateResponse:
        r"""Create a new user list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/userLists", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersUserListsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    
    def realtimebidding_buyers_user_lists_get(self, request: operations.RealtimebiddingBuyersUserListsGetRequest) -> operations.RealtimebiddingBuyersUserListsGetResponse:
        r"""Gets a user list by its name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersUserListsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    
    def realtimebidding_buyers_user_lists_get_remarketing_tag(self, request: operations.RealtimebiddingBuyersUserListsGetRemarketingTagRequest) -> operations.RealtimebiddingBuyersUserListsGetRemarketingTagResponse:
        r"""Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:getRemarketingTag", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersUserListsGetRemarketingTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRemarketingTagResponse])
                res.get_remarketing_tag_response = out

        return res

    
    def realtimebidding_buyers_user_lists_list(self, request: operations.RealtimebiddingBuyersUserListsListRequest) -> operations.RealtimebiddingBuyersUserListsListResponse:
        r"""Lists the user lists visible to the current user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/userLists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersUserListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUserListsResponse])
                res.list_user_lists_response = out

        return res

    
    def realtimebidding_buyers_user_lists_open(self, request: operations.RealtimebiddingBuyersUserListsOpenRequest) -> operations.RealtimebiddingBuyersUserListsOpenResponse:
        r"""Change the status of a user list to OPEN. This allows new users to be added to the user list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:open", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersUserListsOpenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    
    def realtimebidding_buyers_user_lists_update(self, request: operations.RealtimebiddingBuyersUserListsUpdateRequest) -> operations.RealtimebiddingBuyersUserListsUpdateResponse:
        r"""Update the given user list. Only user lists with URLRestrictions can be updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBuyersUserListsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserList])
                res.user_list = out

        return res

    