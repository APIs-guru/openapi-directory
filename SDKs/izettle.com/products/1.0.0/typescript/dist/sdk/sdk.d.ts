import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://products.izettle.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * countAllProducts - Retrieves the count of existing products
    **/
    countAllProducts(req: operations.CountAllProductsRequest, config?: AxiosRequestConfig): Promise<operations.CountAllProductsResponse>;
    /**
     * createCategories - Creates a new category
    **/
    createCategories(req: operations.CreateCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.CreateCategoriesResponse>;
    /**
     * createDiscount - Creates a discount
     *
     * Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header
    **/
    createDiscount(req: operations.CreateDiscountRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiscountResponse>;
    /**
     * createProduct - Creates a new product
    **/
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * createProductSlug - Creates a product identifier
     *
     * Creates a unique slug (identifier) for a product. The slug is used to create a product URL
    **/
    createProductSlug(req: operations.CreateProductSlugRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductSlugResponse>;
    /**
     * createTaxRates - Creates new tax rates
    **/
    createTaxRates(req: operations.CreateTaxRatesRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaxRatesResponse>;
    /**
     * deleteDiscount - Deletes a single discount
    **/
    deleteDiscount(req: operations.DeleteDiscountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDiscountResponse>;
    /**
     * deleteProduct - Deletes a single product
    **/
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * deleteProducts - Deletes a list of products
    **/
    deleteProducts(req: operations.DeleteProductsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsResponse>;
    /**
     * deleteTaxRate - Deletes a single tax rate
    **/
    deleteTaxRate(req: operations.DeleteTaxRateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTaxRateResponse>;
    /**
     * getAllDiscounts - Retrieves all discounts
    **/
    getAllDiscounts(req: operations.GetAllDiscountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllDiscountsResponse>;
    /**
     * getAllImageUrls - Retrieves all library item images
     *
     * Retrieves all library items images used by the organization, sorted by updated date
    **/
    getAllImageUrls(req: operations.GetAllImageUrlsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllImageUrlsResponse>;
    /**
     * getAllOptions - Retrieves an aggregate of active Options in the library
    **/
    getAllOptions(req: operations.GetAllOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllOptionsResponse>;
    /**
     * getAllProductsInPos - Retrieves all products visible in POS
    **/
    getAllProductsInPos(req: operations.GetAllProductsInPosRequest, config?: AxiosRequestConfig): Promise<operations.GetAllProductsInPosResponse>;
    /**
     * getAllProductsV2 - Retrieves all products visible in POS – v2
    **/
    getAllProductsV2(req: operations.GetAllProductsV2Request, config?: AxiosRequestConfig): Promise<operations.GetAllProductsV2Response>;
    /**
     * getDiscount - Retrieves a single discount
     *
     * Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.
    **/
    getDiscount(req: operations.GetDiscountRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscountResponse>;
    /**
     * getLatestImportStatus - Gets status for latest import
    **/
    getLatestImportStatus(req: operations.GetLatestImportStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestImportStatusResponse>;
    /**
     * getLibrary - Retrieves the entire library
     *
     * Will return the entire library for the authenticated user. If size of the library exceeds server preferences (normally 500) or the value of the optional limit parameter, the result will be paginated. Paginated responses return a Link header, indicating the next URI to fetch. The resulting header value will look something like:
     *
     * <https://products.izettle.com/organizations/self/library?limit=X&offset=Y>; rel="next"
     *
     * where limit is number of items in response, and offset is the current position in pagination. The rel-part in the header is the links relation to the data previously recieved. The idea is that as long as this header is present there are still items remaining to be fetched. When either the header is not present or it's value doesn't contain any "next" value, all items have been sent to the client.
     *
     * Note: The client should NOT try to extract query parameters from the URI, but rather use it as-is for the next request. Also, clients should be perpared that one Link header might contain multiple other IRIs that are not "next" (there will never be more than one "next" though). See more at:
     *
     *     IETF: https://tools.ietf.org/html/rfc5988
     *     GitHub: https://developer.github.com/guides/traversing-with-pagination/
     *
     * If eventLogUuid is provided, the response will only include events affecting the library since that event. Such responses are normally quite small and would be a preferred method for most fat clients after retrieving the initial full library.
     *
    **/
    getLibrary(req: operations.GetLibraryRequest, config?: AxiosRequestConfig): Promise<operations.GetLibraryResponse>;
    /**
     * getProduct - Retrieves a single product
     *
     * Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
    **/
    getProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * getProductCountForAllTaxes - Gets all tax rates and a count of products associated with each
    **/
    getProductCountForAllTaxes(req: operations.GetProductCountForAllTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetProductCountForAllTaxesResponse>;
    /**
     * getProductTypes - Retrieves all categories
    **/
    getProductTypes(req: operations.GetProductTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetProductTypesResponse>;
    /**
     * getStatusByUuid - Gets status for an import
    **/
    getStatusByUuid(req: operations.GetStatusByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusByUuidResponse>;
    /**
     * getTaxRate - Gets a single tax rate
    **/
    getTaxRate(req: operations.GetTaxRateRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxRateResponse>;
    /**
     * getTaxRates - Gets all tax rates available
    **/
    getTaxRates(req: operations.GetTaxRatesRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxRatesResponse>;
    /**
     * getTaxSettings - Gets the organization tax settings
    **/
    getTaxSettings(req: operations.GetTaxSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxSettingsResponse>;
    /**
     * importLibraryV2 - Bulk import library items
    **/
    importLibraryV2(req: operations.ImportLibraryV2Request, config?: AxiosRequestConfig): Promise<operations.ImportLibraryV2Response>;
    /**
     * setTaxationMode - Updates the organization tax settings
    **/
    setTaxationMode(req: operations.SetTaxationModeRequest, config?: AxiosRequestConfig): Promise<operations.SetTaxationModeResponse>;
    /**
     * updateDiscount - Updates a single discount
     *
     * Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.
    **/
    updateDiscount(req: operations.UpdateDiscountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDiscountResponse>;
    /**
     * updateProduct - Updates a single product
     *
     * Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
    **/
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
    /**
     * updateTaxRate - Updates a single tax rate
    **/
    updateTaxRate(req: operations.UpdateTaxRateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaxRateResponse>;
}
export {};
