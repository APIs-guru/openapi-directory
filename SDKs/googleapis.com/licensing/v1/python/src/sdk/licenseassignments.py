import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class LicenseAssignments:
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

    
    def licensing_license_assignments_delete(self, request: operations.LicensingLicenseAssignmentsDeleteRequest) -> operations.LicensingLicenseAssignmentsDeleteResponse:
        r"""Revoke a license.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensingLicenseAssignmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def licensing_license_assignments_get(self, request: operations.LicensingLicenseAssignmentsGetRequest) -> operations.LicensingLicenseAssignmentsGetResponse:
        r"""Get a specific user's license by product SKU.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensingLicenseAssignmentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseAssignment])
                res.license_assignment = out

        return res

    
    def licensing_license_assignments_insert(self, request: operations.LicensingLicenseAssignmentsInsertRequest) -> operations.LicensingLicenseAssignmentsInsertResponse:
        r"""Assign a license.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/licensing/v1/product/{productId}/sku/{skuId}/user", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensingLicenseAssignmentsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseAssignment])
                res.license_assignment = out

        return res

    
    def licensing_license_assignments_list_for_product(self, request: operations.LicensingLicenseAssignmentsListForProductRequest) -> operations.LicensingLicenseAssignmentsListForProductResponse:
        r"""List all users assigned licenses for a specific product SKU.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/licensing/v1/product/{productId}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensingLicenseAssignmentsListForProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseAssignmentList])
                res.license_assignment_list = out

        return res

    
    def licensing_license_assignments_list_for_product_and_sku(self, request: operations.LicensingLicenseAssignmentsListForProductAndSkuRequest) -> operations.LicensingLicenseAssignmentsListForProductAndSkuResponse:
        r"""List all users assigned licenses for a specific product SKU.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/licensing/v1/product/{productId}/sku/{skuId}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensingLicenseAssignmentsListForProductAndSkuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseAssignmentList])
                res.license_assignment_list = out

        return res

    
    def licensing_license_assignments_patch(self, request: operations.LicensingLicenseAssignmentsPatchRequest) -> operations.LicensingLicenseAssignmentsPatchResponse:
        r"""Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensingLicenseAssignmentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseAssignment])
                res.license_assignment = out

        return res

    
    def licensing_license_assignments_update(self, request: operations.LicensingLicenseAssignmentsUpdateRequest) -> operations.LicensingLicenseAssignmentsUpdateResponse:
        r"""Reassign a user's product SKU with a different SKU in the same product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensingLicenseAssignmentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LicenseAssignment])
                res.license_assignment = out

        return res

    