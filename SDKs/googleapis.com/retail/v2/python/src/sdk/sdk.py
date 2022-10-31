import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://retail.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def retail_projects_locations_catalogs_attributes_config_add_catalog_attribute(self, request: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest) -> operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{attributesConfig}:addCatalogAttribute", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2AttributesConfig])
                res.google_cloud_retail_v2_attributes_config = out

        return res

    
    def retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute(self, request: operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest) -> operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{attributesConfig}:removeCatalogAttribute", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2AttributesConfig])
                res.google_cloud_retail_v2_attributes_config = out

        return res

    
    def retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute(self, request: operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest) -> operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{attributesConfig}:replaceCatalogAttribute", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2AttributesConfig])
                res.google_cloud_retail_v2_attributes_config = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_add_fulfillment_places(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{product}:addFulfillmentPlaces", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_add_local_inventories(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{product}:addLocalInventories", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_create(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsCreateRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/products", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2Product])
                res.google_cloud_retail_v2_product = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_import(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsImportRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/products:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_list(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsListRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/products", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListProductsResponse])
                res.google_cloud_retail_v2_list_products_response = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_remove_fulfillment_places(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{product}:removeFulfillmentPlaces", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_remove_local_inventories(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{product}:removeLocalInventories", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_branches_products_set_inventory(self, request: operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest) -> operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:setInventory", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_complete_query(self, request: operations.RetailProjectsLocationsCatalogsCompleteQueryRequest) -> operations.RetailProjectsLocationsCatalogsCompleteQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{catalog}:completeQuery", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsCompleteQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2CompleteQueryResponse])
                res.google_cloud_retail_v2_complete_query_response = out

        return res

    
    def retail_projects_locations_catalogs_completion_data_import(self, request: operations.RetailProjectsLocationsCatalogsCompletionDataImportRequest) -> operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/completionData:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_controls_create(self, request: operations.RetailProjectsLocationsCatalogsControlsCreateRequest) -> operations.RetailProjectsLocationsCatalogsControlsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/controls", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsControlsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2Control])
                res.google_cloud_retail_v2_control = out

        return res

    
    def retail_projects_locations_catalogs_controls_list(self, request: operations.RetailProjectsLocationsCatalogsControlsListRequest) -> operations.RetailProjectsLocationsCatalogsControlsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/controls", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsControlsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListControlsResponse])
                res.google_cloud_retail_v2_list_controls_response = out

        return res

    
    def retail_projects_locations_catalogs_get_default_branch(self, request: operations.RetailProjectsLocationsCatalogsGetDefaultBranchRequest) -> operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{catalog}:getDefaultBranch", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2GetDefaultBranchResponse])
                res.google_cloud_retail_v2_get_default_branch_response = out

        return res

    
    def retail_projects_locations_catalogs_list(self, request: operations.RetailProjectsLocationsCatalogsListRequest) -> operations.RetailProjectsLocationsCatalogsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/catalogs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListCatalogsResponse])
                res.google_cloud_retail_v2_list_catalogs_response = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_add_control(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsAddControlRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{servingConfig}:addControl", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_create(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsCreateRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/servingConfigs", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_delete(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsDeleteRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_list(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsListRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/servingConfigs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ListServingConfigsResponse])
                res.google_cloud_retail_v2_list_serving_configs_response = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_patch(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsPatchRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_predict(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsPredictRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{placement}:predict", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2PredictResponse])
                res.google_cloud_retail_v2_predict_response = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_remove_control(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{servingConfig}:removeControl", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2ServingConfig])
                res.google_cloud_retail_v2_serving_config = out

        return res

    
    def retail_projects_locations_catalogs_serving_configs_search(self, request: operations.RetailProjectsLocationsCatalogsServingConfigsSearchRequest) -> operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{placement}:search", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2SearchResponse])
                res.google_cloud_retail_v2_search_response = out

        return res

    
    def retail_projects_locations_catalogs_set_default_branch(self, request: operations.RetailProjectsLocationsCatalogsSetDefaultBranchRequest) -> operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{catalog}:setDefaultBranch", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def retail_projects_locations_catalogs_user_events_collect(self, request: operations.RetailProjectsLocationsCatalogsUserEventsCollectRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:collect", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAPIHTTPBody])
                res.google_api_http_body = out

        return res

    
    def retail_projects_locations_catalogs_user_events_import(self, request: operations.RetailProjectsLocationsCatalogsUserEventsImportRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_user_events_purge(self, request: operations.RetailProjectsLocationsCatalogsUserEventsPurgeRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:purge", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_user_events_rejoin(self, request: operations.RetailProjectsLocationsCatalogsUserEventsRejoinRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:rejoin", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_locations_catalogs_user_events_write(self, request: operations.RetailProjectsLocationsCatalogsUserEventsWriteRequest) -> operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/userEvents:write", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRetailV2UserEvent])
                res.google_cloud_retail_v2_user_event = out

        return res

    
    def retail_projects_operations_get(self, request: operations.RetailProjectsOperationsGetRequest) -> operations.RetailProjectsOperationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def retail_projects_operations_list(self, request: operations.RetailProjectsOperationsListRequest) -> operations.RetailProjectsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}/operations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetailProjectsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    