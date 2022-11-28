import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://products.izettle.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://github.com/iZettle/api-documentation*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * countAllProducts - Retrieves the count of existing products
  **/
  countAllProducts(
    req: operations.CountAllProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CountAllProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CountAllProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products/v2/count", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CountAllProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productCountResponses = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createCategories - Creates a new category
  **/
  createCategories(
    req: operations.CreateCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/categories/v2", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createDiscount - Creates a discount
   *
   * Creates a single discount entity. The location of the newly created discount will be available in the successful response as a HttpHeaders.LOCATION header
  **/
  createDiscount(
    req: operations.CreateDiscountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDiscountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDiscountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/discounts", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateDiscountResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createProduct - Creates a new product
  **/
  createProduct(
    req: operations.CreateProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateProductResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createProductSlug - Creates a product identifier
   *
   * Creates a unique slug (identifier) for a product. The slug is used to create a product URL
  **/
  createProductSlug(
    req: operations.CreateProductSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProductSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProductSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products/online/slug", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateProductSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.slugResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTaxRates - Creates new tax rates
  **/
  createTaxRates(
    req: operations.CreateTaxRatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTaxRatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTaxRatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/taxes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateTaxRatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRatesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteDiscount - Deletes a single discount 
  **/
  deleteDiscount(
    req: operations.DeleteDiscountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDiscountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDiscountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/discounts/{discountUuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDiscountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteProduct - Deletes a single product
  **/
  deleteProduct(
    req: operations.DeleteProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products/{productUuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteProducts - Deletes a list of products
  **/
  deleteProducts(
    req: operations.DeleteProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTaxRate - Deletes a single tax rate
  **/
  deleteTaxRate(
    req: operations.DeleteTaxRateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTaxRateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTaxRateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/taxes/{taxRateUuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTaxRateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllDiscounts - Retrieves all discounts
  **/
  getAllDiscounts(
    req: operations.GetAllDiscountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllDiscountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllDiscountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/discounts", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllDiscountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.discountResponses = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllImageUrls - Retrieves all library item images
   *
   * Retrieves all library items images used by the organization, sorted by updated date
  **/
  getAllImageUrls(
    req: operations.GetAllImageUrlsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllImageUrlsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllImageUrlsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/images", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllImageUrlsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.libraryImagesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllOptions - Retrieves an aggregate of active Options in the library
  **/
  getAllOptions(
    req: operations.GetAllOptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllOptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllOptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products/options", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllOptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.variantOptionsResponses = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllProductsInPos - Retrieves all products visible in POS
  **/
  getAllProductsInPos(
    req: operations.GetAllProductsInPosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllProductsInPosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllProductsInPosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllProductsInPosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productResponses = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAllProductsV2 - Retrieves all products visible in POS – v2
  **/
  getAllProductsV2(
    req: operations.GetAllProductsV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAllProductsV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAllProductsV2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products/v2", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAllProductsV2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productResponses = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDiscount - Retrieves a single discount
   *
   * Get the full discount with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full discount is returned: otherwise a 304 not modified will be returned with an empty body.
  **/
  getDiscount(
    req: operations.GetDiscountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiscountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiscountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/discounts/{discountUuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDiscountResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.discountResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLatestImportStatus - Gets status for latest import
  **/
  getLatestImportStatus(
    req: operations.GetLatestImportStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestImportStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestImportStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/import/status", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLatestImportStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
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
  getLibrary(
    req: operations.GetLibraryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLibraryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLibraryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/library", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLibraryResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.libraryResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProduct - Retrieves a single product
   *
   * Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
  **/
  getProduct(
    req: operations.GetProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products/{productUuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProductCountForAllTaxes - Gets all tax rates and a count of products associated with each
  **/
  getProductCountForAllTaxes(
    req: operations.GetProductCountForAllTaxesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductCountForAllTaxesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductCountForAllTaxesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/taxes/count";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductCountForAllTaxesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRateProductCountResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getProductTypes - Retrieves all categories
  **/
  getProductTypes(
    req: operations.GetProductTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductTypesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/categories/v2", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.categoryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStatusByUuid - Gets status for an import
  **/
  getStatusByUuid(
    req: operations.GetStatusByUuidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStatusByUuidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStatusByUuidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/import/status/{importUuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetStatusByUuidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTaxRate - Gets a single tax rate
  **/
  getTaxRate(
    req: operations.GetTaxRateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTaxRateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTaxRateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/taxes/{taxRateUuid}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTaxRateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRate = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTaxRates - Gets all tax rates available
  **/
  getTaxRates(
    req: operations.GetTaxRatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTaxRatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTaxRatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/taxes";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTaxRatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRatesResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTaxSettings - Gets the organization tax settings 
  **/
  getTaxSettings(
    req: operations.GetTaxSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTaxSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTaxSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/taxes/settings";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTaxSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxSettingsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * importLibraryV2 - Bulk import library items
  **/
  importLibraryV2(
    req: operations.ImportLibraryV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ImportLibraryV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImportLibraryV2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/import/v2", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ImportLibraryV2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setTaxationMode - Updates the organization tax settings
  **/
  setTaxationMode(
    req: operations.SetTaxationModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetTaxationModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetTaxationModeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/taxes/settings";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SetTaxationModeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxSettingsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateDiscount - Updates a single discount
   *
   * Updates a discount entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the discount is updated: otherwise a 412 precondition failed will be returned with an empty body.
  **/
  updateDiscount(
    req: operations.UpdateDiscountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateDiscountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateDiscountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/discounts/{discountUuid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateDiscountResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateProduct - Updates a single product
   *
   * Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
  **/
  updateProduct(
    req: operations.UpdateProductRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProductResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProductRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/organizations/{organizationUuid}/products/v2/{productUuid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateProductResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateTaxRate - Updates a single tax rate
  **/
  updateTaxRate(
    req: operations.UpdateTaxRateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTaxRateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTaxRateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/taxes/{taxRateUuid}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTaxRateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.taxRate = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
