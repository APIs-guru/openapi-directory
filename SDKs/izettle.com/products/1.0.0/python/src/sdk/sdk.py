
__doc__ = """ SDK Documentation: https://github.com/iZettle/api-documentation"""
import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://products.izettle.com",
]


class SDK:
    r"""SDK Documentation: https://github.com/iZettle/api-documentation"""

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def count_all_products(self, request: operations.CountAllProductsRequest) -> operations.CountAllProductsResponse:
        r"""Retrieves the count of existing products
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/v2/count", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CountAllProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductCountResponse]])
                res.product_count_responses = out

        return res

    
    def create_categories(self, request: operations.CreateCategoriesRequest) -> operations.CreateCategoriesResponse:
        r"""Creates a new category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/categories/v2", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_discount(self, request: operations.CreateDiscountRequest) -> operations.CreateDiscountResponse:
        r"""Creates a discount
        Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/discounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDiscountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def create_product(self, request: operations.CreateProductRequest) -> operations.CreateProductResponse:
        r"""Creates a new product
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductResponse])
                res.product_response = out

        return res

    
    def create_product_slug(self, request: operations.CreateProductSlugRequest) -> operations.CreateProductSlugResponse:
        r"""Creates a product identifier
        Creates a unique slug (identifier) for a product. The slug is used to create a product URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/online/slug", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProductSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SlugResponse])
                res.slug_response = out

        return res

    
    def create_tax_rates(self, request: operations.CreateTaxRatesRequest) -> operations.CreateTaxRatesResponse:
        r"""Creates new tax rates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTaxRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRatesResponse])
                res.tax_rates_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def delete_discount(self, request: operations.DeleteDiscountRequest) -> operations.DeleteDiscountResponse:
        r"""Deletes a single discount 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/discounts/{discountUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDiscountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_product(self, request: operations.DeleteProductRequest) -> operations.DeleteProductResponse:
        r"""Deletes a single product
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/{productUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_products(self, request: operations.DeleteProductsRequest) -> operations.DeleteProductsResponse:
        r"""Deletes a list of products
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_tax_rate(self, request: operations.DeleteTaxRateRequest) -> operations.DeleteTaxRateResponse:
        r"""Deletes a single tax rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxes/{taxRateUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTaxRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_all_discounts(self, request: operations.GetAllDiscountsRequest) -> operations.GetAllDiscountsResponse:
        r"""Retrieves all discounts
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/discounts", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllDiscountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiscountResponse]])
                res.discount_responses = out

        return res

    
    def get_all_image_urls(self, request: operations.GetAllImageUrlsRequest) -> operations.GetAllImageUrlsResponse:
        r"""Retrieves all library item images
        Retrieves all library items images used by the organization, sorted by updated date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/images", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllImageUrlsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LibraryImagesResponse])
                res.library_images_response = out

        return res

    
    def get_all_options(self, request: operations.GetAllOptionsRequest) -> operations.GetAllOptionsResponse:
        r"""Retrieves an aggregate of active Options in the library
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/options", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.VariantOptionsResponse]])
                res.variant_options_responses = out

        return res

    
    def get_all_products_in_pos(self, request: operations.GetAllProductsInPosRequest) -> operations.GetAllProductsInPosResponse:
        r"""Retrieves all products visible in POS
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllProductsInPosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductResponse]])
                res.product_responses = out

        return res

    
    def get_all_products_v2(self, request: operations.GetAllProductsV2Request) -> operations.GetAllProductsV2Response:
        r"""Retrieves all products visible in POS – v2
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/v2", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllProductsV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductResponse]])
                res.product_responses = out

        return res

    
    def get_discount(self, request: operations.GetDiscountRequest) -> operations.GetDiscountResponse:
        r"""Retrieves a single discount
        Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/discounts/{discountUuid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DiscountResponse])
                res.discount_response = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_latest_import_status(self, request: operations.GetLatestImportStatusRequest) -> operations.GetLatestImportStatusResponse:
        r"""Gets status for latest import
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/import/status", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestImportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportResponse])
                res.import_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_library(self, request: operations.GetLibraryRequest) -> operations.GetLibraryResponse:
        r"""Retrieves the entire library
        Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:
        
        <https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel=\"next\"
        
        where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any \"next\" value, all items have been sent to the client.
        
        Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not \"next\" (there will never be more than one \"next\" though). See more at:
        
            IETF: https://tools.ietf.org/html/rfc5988
            GitHub: https://developer.github.com/guides/traversing-with-pagination/
        
        If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/library", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLibraryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LibraryResponse])
                res.library_response = out
        elif r.status_code == 412:
            pass

        return res

    
    def get_product(self, request: operations.GetProductRequest) -> operations.GetProductResponse:
        r"""Retrieves a single product
        Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/{productUuid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductResponse])
                res.product_response = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_product_count_for_all_taxes(self, request: operations.GetProductCountForAllTaxesRequest) -> operations.GetProductCountForAllTaxesResponse:
        r"""Gets all tax rates and a count of products associated with each
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes/count"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductCountForAllTaxesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRateProductCountResponse])
                res.tax_rate_product_count_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def get_product_types(self, request: operations.GetProductTypesRequest) -> operations.GetProductTypesResponse:
        r"""Retrieves all categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/categories/v2", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryResponse])
                res.category_response = out

        return res

    
    def get_status_by_uuid(self, request: operations.GetStatusByUUIDRequest) -> operations.GetStatusByUUIDResponse:
        r"""Gets status for an import
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/import/status/{importUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusByUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportResponse])
                res.import_response = out
        elif r.status_code == 404:
            pass

        return res

    
    def get_tax_rate(self, request: operations.GetTaxRateRequest) -> operations.GetTaxRateResponse:
        r"""Gets a single tax rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxes/{taxRateUuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRate])
                res.tax_rate = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_tax_rates(self, request: operations.GetTaxRatesRequest) -> operations.GetTaxRatesResponse:
        r"""Gets all tax rates available
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TaxRatesResponse]])
                res.tax_rates_responses = out
        elif r.status_code == 403:
            pass

        return res

    
    def get_tax_settings(self, request: operations.GetTaxSettingsRequest) -> operations.GetTaxSettingsResponse:
        r"""Gets the organization tax settings 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes/settings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxSettingsResponse])
                res.tax_settings_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def import_library_v2(self, request: operations.ImportLibraryV2Request) -> operations.ImportLibraryV2Response:
        r"""Bulk import library items
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/import/v2", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportLibraryV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImportResponse])
                res.import_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out

        return res

    
    def set_taxation_mode(self, request: operations.SetTaxationModeRequest) -> operations.SetTaxationModeResponse:
        r"""Updates the organization tax settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/taxes/settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetTaxationModeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxSettingsResponse])
                res.tax_settings_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            pass

        return res

    
    def update_discount(self, request: operations.UpdateDiscountRequest) -> operations.UpdateDiscountResponse:
        r"""Updates a single discount
        Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/discounts/{discountUuid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDiscountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            pass

        return res

    
    def update_product(self, request: operations.UpdateProductRequest) -> operations.UpdateProductResponse:
        r"""Updates a single product
        Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationUuid}/products/v2/{productUuid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 412:
            pass

        return res

    
    def update_tax_rate(self, request: operations.UpdateTaxRateRequest) -> operations.UpdateTaxRateResponse:
        r"""Updates a single tax rate
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxes/{taxRateUuid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaxRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaxRate])
                res.tax_rate = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    