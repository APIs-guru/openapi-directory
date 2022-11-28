import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Partners {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * paymentsresellersubscriptionPartnersProductsList - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
  **/
  paymentsresellersubscriptionPartnersProductsList(
    req: operations.PaymentsresellersubscriptionPartnersProductsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersProductsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersProductsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/products", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.PaymentsresellersubscriptionPartnersProductsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1ListProductsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersPromotionsFindEligible - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
  **/
  paymentsresellersubscriptionPartnersPromotionsFindEligible(
    req: operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/promotions:findEligible", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersPromotionsList - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
  **/
  paymentsresellersubscriptionPartnersPromotionsList(
    req: operations.PaymentsresellersubscriptionPartnersPromotionsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersPromotionsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersPromotionsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/promotions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.PaymentsresellersubscriptionPartnersPromotionsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersSubscriptionsCancel - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
  **/
  paymentsresellersubscriptionPartnersSubscriptionsCancel(
    req: operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:cancel", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersSubscriptionsCreate - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
  **/
  paymentsresellersubscriptionPartnersSubscriptionsCreate(
    req: operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/subscriptions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1Subscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersSubscriptionsEntitle - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
  **/
  paymentsresellersubscriptionPartnersSubscriptionsEntitle(
    req: operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:entitle", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersSubscriptionsExtend - Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
  **/
  paymentsresellersubscriptionPartnersSubscriptionsExtend(
    req: operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:extend", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersSubscriptionsGet - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
  **/
  paymentsresellersubscriptionPartnersSubscriptionsGet(
    req: operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1Subscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersSubscriptionsProvision - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
  **/
  paymentsresellersubscriptionPartnersSubscriptionsProvision(
    req: operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/subscriptions:provision", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1Subscription = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * paymentsresellersubscriptionPartnersSubscriptionsUndoCancel - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
  **/
  paymentsresellersubscriptionPartnersSubscriptionsUndoCancel(
    req: operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:undoCancel", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
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
        const res: operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
