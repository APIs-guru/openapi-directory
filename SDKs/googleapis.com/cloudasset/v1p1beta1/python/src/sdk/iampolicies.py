import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class IamPolicies:
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

    
    def cloudasset_iam_policies_search_all(self, request: operations.CloudassetIamPoliciesSearchAllRequest) -> operations.CloudassetIamPoliciesSearchAllResponse:
        r"""Searches all the IAM policies within a given accessible CRM scope (project/folder/organization). This RPC gives callers especially administrators the ability to search all the IAM policies within a scope, even if they don't have `.getIamPolicy` permission of all the IAM policies. Callers should have `cloud.assets.SearchAllIamPolicies` permission on the requested scope, otherwise the request will be rejected.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1p1beta1/{scope}/iamPolicies:searchAll", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetIamPoliciesSearchAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAllIamPoliciesResponse])
                res.search_all_iam_policies_response = out

        return res

    