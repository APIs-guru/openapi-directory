import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Shippingsettings:
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

    
    def content_shippingsettings_custombatch(self, request: operations.ContentShippingsettingsCustombatchRequest) -> operations.ContentShippingsettingsCustombatchResponse:
        r"""Retrieves and updates the shipping settings of multiple accounts in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shippingsettings/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShippingsettingsCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingsettingsCustomBatchResponse])
                res.shippingsettings_custom_batch_response = out

        return res

    
    def content_shippingsettings_get(self, request: operations.ContentShippingsettingsGetRequest) -> operations.ContentShippingsettingsGetResponse:
        r"""Retrieves the shipping settings of the account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/shippingsettings/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShippingsettingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingSettings])
                res.shipping_settings = out

        return res

    
    def content_shippingsettings_getsupportedcarriers(self, request: operations.ContentShippingsettingsGetsupportedcarriersRequest) -> operations.ContentShippingsettingsGetsupportedcarriersResponse:
        r"""Retrieves supported carriers and carrier services for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/supportedCarriers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShippingsettingsGetsupportedcarriersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingsettingsGetSupportedCarriersResponse])
                res.shippingsettings_get_supported_carriers_response = out

        return res

    
    def content_shippingsettings_getsupportedholidays(self, request: operations.ContentShippingsettingsGetsupportedholidaysRequest) -> operations.ContentShippingsettingsGetsupportedholidaysResponse:
        r"""Retrieves supported holidays for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/supportedHolidays", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShippingsettingsGetsupportedholidaysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingsettingsGetSupportedHolidaysResponse])
                res.shippingsettings_get_supported_holidays_response = out

        return res

    
    def content_shippingsettings_getsupportedpickupservices(self, request: operations.ContentShippingsettingsGetsupportedpickupservicesRequest) -> operations.ContentShippingsettingsGetsupportedpickupservicesResponse:
        r"""Retrieves supported pickup services for an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/supportedPickupServices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShippingsettingsGetsupportedpickupservicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingsettingsGetSupportedPickupServicesResponse])
                res.shippingsettings_get_supported_pickup_services_response = out

        return res

    
    def content_shippingsettings_list(self, request: operations.ContentShippingsettingsListRequest) -> operations.ContentShippingsettingsListResponse:
        r"""Lists the shipping settings of the sub-accounts in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/shippingsettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShippingsettingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingsettingsListResponse])
                res.shippingsettings_list_response = out

        return res

    
    def content_shippingsettings_update(self, request: operations.ContentShippingsettingsUpdateRequest) -> operations.ContentShippingsettingsUpdateResponse:
        r"""Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/shippingsettings/{accountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentShippingsettingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingSettings])
                res.shipping_settings = out

        return res

    