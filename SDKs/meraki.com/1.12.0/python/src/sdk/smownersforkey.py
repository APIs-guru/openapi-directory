import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class SmOwnersForKey:
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

    
    def get_network_pii_sm_owners_for_key(self, request: operations.GetNetworkPiiSmOwnersForKeyRequest) -> operations.GetNetworkPiiSmOwnersForKeyResponse:
        r"""Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
        Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
        
        ## ALTERNATE PATH
        
        ```
        /organizations/{organizationId}/pii/smOwnersForKey
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/pii/smOwnersForKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkPiiSmOwnersForKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_pii_sm_owners_for_key_200_application_json_object = out

        return res

    