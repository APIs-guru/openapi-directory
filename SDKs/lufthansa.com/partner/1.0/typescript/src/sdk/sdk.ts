import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.lufthansa.com/v1",
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
   * allFares - All Fares
   *
   * Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS
  **/
  allFares(
    req: operations.AllFaresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AllFaresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AllFaresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/allfares";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AllFaresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.allFares200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * autoCheckIn - Auto Check-In
   *
   * Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners
  **/
  autoCheckIn(
    req: operations.AutoCheckInRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AutoCheckInResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AutoCheckInRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/preflight/autocheckin/{ticketnumber}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AutoCheckInResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.autoCheckIn200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * baggageTripAndContact - Baggage Trip and Contact
   *
   * Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners
  **/
  baggageTripAndContact(
    req: operations.BaggageTripAndContactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BaggageTripAndContactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BaggageTripAndContactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/baggage/baggagetripandcontact/{searchID}", req.pathParams);
    
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
        const res: operations.BaggageTripAndContactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baggageTripAndContact200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * bestFares - Best Fares
   *
   * Retrieve best fares for the requested journey across multiple days or multiple months.
  **/
  bestFares(
    req: operations.BestFaresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BestFaresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BestFaresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/bestfares";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BestFaresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bestFares200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deepLinks - Deep Links
   *
   * Returns valid deep links for the provided input parameters
  **/
  deepLinks(
    req: operations.DeepLinksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeepLinksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeepLinksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/deeplink";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeepLinksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deepLinks200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fares - Fares
   *
   * Retrieve all available fares per fare family for a specific Origin & Destination on a given date
  **/
  fares(
    req: operations.FaresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FaresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FaresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/fares";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FaresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fares200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * faresSubscriptions - Fares Subscriptions
   *
   * Create a subscription for best price O&D. Receive regular updates on lowest fares
  **/
  faresSubscriptions(
    req: operations.FaresSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FaresSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FaresSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/subscriptions";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FaresSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.faresSubscriptions200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * lhDeepLinksFfp - LH Deep Links - FFP
   *
   * Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)
  **/
  lhDeepLinksFfp(
    req: operations.LhDeepLinksFfpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LhDeepLinksFfpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LhDeepLinksFfpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/deeplink/ffp";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LhDeepLinksFfpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.lhDeepLinksFfp200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * lhDeepLinksItco - LH Deep Links - ITCO
   *
   * Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)
  **/
  lhDeepLinksItco(
    req: operations.LhDeepLinksItcoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LhDeepLinksItcoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LhDeepLinksItcoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/deeplink/itco";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LhDeepLinksItcoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.lhDeepLinksItco200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * lowestFares - Lowest Fares
   *
   * Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH
  **/
  lowestFares(
    req: operations.LowestFaresRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LowestFaresResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LowestFaresRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/fares/lowestfares";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LowestFaresResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.lowestFares200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * ondRoute - OND Route
   *
   * Returns LH route origin & destination information
  **/
  ondRoute(
    req: operations.OndRouteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OndRouteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OndRouteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/offers/ond/route/{origin}/{destination}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OndRouteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ondRoute200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * ondStatus - OND Status
   *
   * Returns LH network route status information. Search for recently added or retired routes
  **/
  ondStatus(
    req: operations.OndStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OndStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OndStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/ond/status";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OndStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ondStatus200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * orders - Orders
   *
   * Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners
  **/
  orders(
    req: operations.OrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/orders/{orderID}/{name}", req.pathParams);
    
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
        const res: operations.OrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orders200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * priceOffers - Price Offers
   *
   * Retrieve a best price offer given an origin and destination.
  **/
  priceOffers(
    req: operations.PriceOffersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PriceOffersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PriceOffersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/promotions/priceoffers/flights/ond/{origin}/{destination}", req.pathParams);
    
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
        const res: operations.PriceOffersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.priceOffers200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * seatDetails - Seat Details
   *
   * A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.
  **/
  seatDetails(
    req: operations.SeatDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SeatDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SeatDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/seatdetails/{aircraftCode}/{cabinCode}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SeatDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.seatDetails200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * topOnd - Top OND
   *
   * Returns LH Top routes per country or across all countries
  **/
  topOnd(
    req: operations.TopOndRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TopOndResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TopOndRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/offers/ond/top";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TopOndResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.topOnd200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
