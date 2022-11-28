import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FirstAndThirdPartyAudiences:
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

    
    def displayvideo_first_and_third_party_audiences_create(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesCreateRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse:
        r"""Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/firstAndThirdPartyAudiences"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstAndThirdPartyAudience])
                res.first_and_third_party_audience = out

        return res

    
    def displayvideo_first_and_third_party_audiences_edit_customer_match_members(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse:
        r"""Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditCustomerMatchMembersResponse])
                res.edit_customer_match_members_response = out

        return res

    
    def displayvideo_first_and_third_party_audiences_get(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesGetRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse:
        r"""Gets a first and third party audience.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstAndThirdPartyAudience])
                res.first_and_third_party_audience = out

        return res

    
    def displayvideo_first_and_third_party_audiences_list(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesListRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse:
        r"""Lists first and third party audiences. The order is defined by the order_by parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/firstAndThirdPartyAudiences"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFirstAndThirdPartyAudiencesResponse])
                res.list_first_and_third_party_audiences_response = out

        return res

    
    def displayvideo_first_and_third_party_audiences_patch(self, request: operations.DisplayvideoFirstAndThirdPartyAudiencesPatchRequest) -> operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse:
        r"""Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoFirstAndThirdPartyAudiencesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirstAndThirdPartyAudience])
                res.first_and_third_party_audience = out

        return res

    