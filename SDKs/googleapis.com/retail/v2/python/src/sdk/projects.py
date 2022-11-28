import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def retail_projects_locations_catalogs_attributes_config_add_catalog_attribute(self, request: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest) -> operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse:
        r"""Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{attributesConfig}:addCatalogAttribute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2AttributesConfig])
                res.google_cloud_retail_v2_attributes_config = out

        return res

    
    def retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute(self, request: operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest) -> operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse:
        r"""Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{attributesConfig}:removeCatalogAttribute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2AttributesConfig])
                res.google_cloud_retail_v2_attributes_config = out

        return res

    
    def retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute(self, request: operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest) -> operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse:
        r"""Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{attributesConfig}:replaceCatalogAttribute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2AttributesConfig])
                res.google_cloud_retail_v2_attributes_config = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_add_fulfillment_places(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse:
        r"""Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{product}:addFulfillmentPlaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_add_local_inventories(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse:
        r"""Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{product}:addLocalInventories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_create(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsCreateRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse:
        r"""Creates a Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/products", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2Product])
                res.google_cloud_retail_v2_product = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_import(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsImportRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse:
        r"""Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/products:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_list(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsListRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse:
        r"""Gets a list of Products.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/products", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListProductsResponse])
                res.google_cloud_retail_v2_list_products_response = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_remove_fulfillment_places(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse:
        r"""Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{product}:removeFulfillmentPlaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_remove_local_inventories(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse:
        r"""Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{product}:removeLocalInventories", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_set_inventory(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse:
        r"""Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:setInventory", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_complete_query(self, request: operations.RetailProjectsLocationsCatalogsCompleteQueryRequest) -> operations.RetailProjectsLocationsCatalogsCompleteQueryResponse:
        r"""Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{catalog}:completeQuery", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsCompleteQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2CompleteQueryResponse])
                res.google_cloud_retail_v2_complete_query_response = out

        return res

    
    def retail_projects_locations_catalogs_completion_data_import(self, request: operations.RetailProjectsLocationsCatalogsCompletionDataImportRequest) -> operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse:
        r"""Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/completionData:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_controls_create(self, request: operations.RetailProjectsLocationsCatalogsControlsCreateRequest) -> operations.RetailProjectsLocationsCatalogsControlsCreateResponse:
        r"""Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/controls", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsControlsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2Control])
                res.google_cloud_retail_v2_control = out

        return res

    
    def retail_projects_locations_catalogs_controls_list(self, request: operations.RetailProjectsLocationsCatalogsControlsListRequest) -> operations.RetailProjectsLocationsCatalogsControlsListResponse:
        r"""Lists all Controls by their parent Catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/controls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsControlsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListControlsResponse])
                res.google_cloud_retail_v2_list_controls_response = out

        return res

    
    def retail_projects_locations_catalogs_get_default_branch(self, request: operations.RetailProjectsLocationsCatalogsGetDefaultBranchRequest) -> operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse:
        r"""Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{catalog}:getDefaultBranch", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2GetDefaultBranchResponse])
                res.google_cloud_retail_v2_get_default_branch_response = out

        return res

    
    def retail_projects_locations_catalogs_list(self, request: operations.RetailProjectsLocationsCatalogsListRequest) -> operations.RetailProjectsLocationsCatalogsListResponse:
        r"""Lists all the Catalogs associated with the project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/catalogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListCatalogsResponse])
                res.google_cloud_retail_v2_list_catalogs_response = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_add_control(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsAddControlRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse:
        r"""Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{servingConfig}:addControl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_create(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsCreateRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse:
        r"""Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/servingConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_delete(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsDeleteRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse:
        r"""Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_list(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsListRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsListResponse:
        r"""Lists all ServingConfigs linked to this catalog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/servingConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListServingConfigsResponse])
                res.google_cloud_retail_v2_list_serving_configs_response = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_patch(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsPatchRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse:
        r"""Updates a ServingConfig.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_predict(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsPredictRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse:
        r"""Makes a recommendation prediction.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{placement}:predict", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2PredictResponse])
                res.google_cloud_retail_v2_predict_response = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_remove_control(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse:
        r"""Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{servingConfig}:removeControl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_search(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsSearchRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse:
        r"""Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{placement}:search", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2SearchResponse])
                res.google_cloud_retail_v2_search_response = out

        return res

    
    def retail_projects_locations_catalogs_set_default_branch(self, request: operations.RetailProjectsLocationsCatalogsSetDefaultBranchRequest) -> operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse:
        r"""Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using \"default_branch\" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{catalog}:setDefaultBranch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def retail_projects_locations_catalogs_user_events_collect(self, request: operations.RetailProjectsLocationsCatalogsUserEventsCollectRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse:
        r"""Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:collect", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def retail_projects_locations_catalogs_user_events_import(self, request: operations.RetailProjectsLocationsCatalogsUserEventsImportRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsImportResponse:
        r"""Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_user_events_purge(self, request: operations.RetailProjectsLocationsCatalogsUserEventsPurgeRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse:
        r"""Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:purge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_user_events_rejoin(self, request: operations.RetailProjectsLocationsCatalogsUserEventsRejoinRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse:
        r"""Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:rejoin", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_user_events_write(self, request: operations.RetailProjectsLocationsCatalogsUserEventsWriteRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse:
        r"""Writes a single user event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:write", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2UserEvent])
                res.google_cloud_retail_v2_user_event = out

        return res

    
    def retail_projects_operations_get(self, request: operations.RetailProjectsOperationsGetRequest) -> operations.RetailProjectsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_operations_list(self, request: operations.RetailProjectsOperationsListRequest) -> operations.RetailProjectsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    