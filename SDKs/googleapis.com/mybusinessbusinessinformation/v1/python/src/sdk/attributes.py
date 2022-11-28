import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Attributes:
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

    
    def mybusinessbusinessinformation_attributes_list(self, request: operations.MybusinessbusinessinformationAttributesListRequest) -> operations.MybusinessbusinessinformationAttributesListResponse:
        r"""Returns the list of attributes that would be available for a location with the given primary category and country.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/attributes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessbusinessinformationAttributesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAttributeMetadataResponse])
                res.list_attribute_metadata_response = out

        return res

    