import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Orderinvoices:
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

    
    def content_orderinvoices_createchargeinvoice(self, request: operations.ContentOrderinvoicesCreatechargeinvoiceRequest) -> operations.ContentOrderinvoicesCreatechargeinvoiceResponse:
        r"""Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orderinvoices/{orderId}/createChargeInvoice", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrderinvoicesCreatechargeinvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderinvoicesCreateChargeInvoiceResponse])
                res.orderinvoices_create_charge_invoice_response = out

        return res

    
    def content_orderinvoices_createrefundinvoice(self, request: operations.ContentOrderinvoicesCreaterefundinvoiceRequest) -> operations.ContentOrderinvoicesCreaterefundinvoiceResponse:
        r"""Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orderinvoices/{orderId}/createRefundInvoice", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrderinvoicesCreaterefundinvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderinvoicesCreateRefundInvoiceResponse])
                res.orderinvoices_create_refund_invoice_response = out

        return res

    