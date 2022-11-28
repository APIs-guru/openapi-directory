import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Invoice:
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

    
    def get_invoice(self, request: operations.GetInvoiceRequest) -> operations.GetInvoiceResponse:
        r"""List a specific invoice of project Level
        List a specific invoice of project Level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/{invoice_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invoice_expand_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invoice_expand_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_invoice_files(self, request: operations.GetInvoiceFilesRequest) -> operations.GetInvoiceFilesResponse:
        r"""List files of invoice Level
        List files of invoice Level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/{invoice_id}/files", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_list_response_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_list_response_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_invoices(self, request: operations.GetInvoicesRequest) -> operations.GetInvoicesResponse:
        r"""List invoices by a specific order
        List invoices by a specific order
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/invoices/orders/{order_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invoice_detail_list_expand_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invoice_detail_list_expand_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    