import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Conversion:
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

    
    def doubleclicksearch_conversion_get(self, request: operations.DoubleclicksearchConversionGetRequest) -> operations.DoubleclicksearchConversionGetResponse:
        r"""Retrieves a list of conversions from a DoubleClick Search engine account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchConversionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversionList])
                res.conversion_list = out

        return res

    
    def doubleclicksearch_conversion_get_by_customer_id(self, request: operations.DoubleclicksearchConversionGetByCustomerIDRequest) -> operations.DoubleclicksearchConversionGetByCustomerIDResponse:
        r"""Retrieves a list of conversions from a DoubleClick Search engine account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/doubleclicksearch/v2/customer/{customerId}/conversion", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchConversionGetByCustomerIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversionList])
                res.conversion_list = out

        return res

    
    def doubleclicksearch_conversion_insert(self, request: operations.DoubleclicksearchConversionInsertRequest) -> operations.DoubleclicksearchConversionInsertResponse:
        r"""Inserts a batch of new conversions into DoubleClick Search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/doubleclicksearch/v2/conversion"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchConversionInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversionList])
                res.conversion_list = out

        return res

    
    def doubleclicksearch_conversion_update(self, request: operations.DoubleclicksearchConversionUpdateRequest) -> operations.DoubleclicksearchConversionUpdateResponse:
        r"""Updates a batch of conversions in DoubleClick Search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/doubleclicksearch/v2/conversion"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchConversionUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConversionList])
                res.conversion_list = out

        return res

    
    def doubleclicksearch_conversion_update_availability(self, request: operations.DoubleclicksearchConversionUpdateAvailabilityRequest) -> operations.DoubleclicksearchConversionUpdateAvailabilityResponse:
        r"""Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/doubleclicksearch/v2/conversion/updateAvailability"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DoubleclicksearchConversionUpdateAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateAvailabilityResponse])
                res.update_availability_response = out

        return res

    