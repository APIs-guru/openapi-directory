import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TargetableRemarketingLists:
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

    
    def dfareporting_targetable_remarketing_lists_get(self, request: operations.DfareportingTargetableRemarketingListsGetRequest) -> operations.DfareportingTargetableRemarketingListsGetResponse:
        r"""Gets one remarketing list by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/targetableRemarketingLists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingTargetableRemarketingListsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetableRemarketingList])
                res.targetable_remarketing_list = out

        return res

    
    def dfareporting_targetable_remarketing_lists_list(self, request: operations.DfareportingTargetableRemarketingListsListRequest) -> operations.DfareportingTargetableRemarketingListsListResponse:
        r"""Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/targetableRemarketingLists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingTargetableRemarketingListsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetableRemarketingListsListResponse])
                res.targetable_remarketing_lists_list_response = out

        return res

    