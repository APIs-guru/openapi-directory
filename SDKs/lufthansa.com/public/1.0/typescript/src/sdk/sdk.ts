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
   * cargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
   *
   * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
  **/
  cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(
    req: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", req.pathParams);
    
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
        const res: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
   *
   * With this tracking service you can easily retrieve your shipment or flight status information.
  **/
  cargoShipmentTrackingByAwbPrefixAndAwbNumberGet(
    req: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", req.pathParams);
    
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
        const res: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * offersLoungesByLocationGet - Lounges
   *
   * Lounge information
  **/
  offersLoungesByLocationGet(
    req: operations.OffersLoungesByLocationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OffersLoungesByLocationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OffersLoungesByLocationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/offers/lounges/{location}", req.pathParams);
    
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
        const res: operations.OffersLoungesByLocationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.offersLoungesByLocationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet - Seat Maps
   *
   * Cabin layout and seat characteristics.
  **/
  offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(
    req: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}", req.pathParams);
    
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
        const res: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
   *
   * Status of all arrivals at a given airport up to 4 hours from the provided date time.
  **/
  operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(
    req: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * operationsFlightstatusByFlightNumberAndDateGet - Flight Status
   *
   * Status of a particular flight (boarding, delayed, etc.).
  **/
  operationsFlightstatusByFlightNumberAndDateGet(
    req: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusByFlightNumberAndDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusByFlightNumberAndDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/{flightNumber}/{date}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusByFlightNumberAndDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusByFlightNumberAndDateGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
   *
   * Status of all departures from a given airport up to 4 hours from the provided date time.
  **/
  operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(
    req: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * operationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
   *
   * Status of flights between a given origin and destination on a given date.
  **/
  operationsFlightstatusRouteDateByOriginAndDestinationGet(
    req: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/route/{origin}/{destination}/{date}", req.pathParams);
    
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
        const res: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * operationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
   *
   * Scheduled flights between given airports on a given date.
  **/
  operationsSchedulesFromDateTimeByOriginAndDestinationGet(
    req: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/schedules/{origin}/{destination}/{fromDateTime}", req.pathParams);
    
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
        const res: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * referencesAircraftByAircraftCodeGet - Aircraft
   *
   * List all aircraft types or one specific aircraft type.
  **/
  referencesAircraftByAircraftCodeGet(
    req: operations.ReferencesAircraftByAircraftCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAircraftByAircraftCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAircraftByAircraftCodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/aircraft/{aircraftCode}", req.pathParams);
    
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
        const res: operations.ReferencesAircraftByAircraftCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referencesAircraftByAircraftCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * referencesAirlinesByAirlineCodeGet - Airlines
   *
   * List all airlines or one specific airline.
  **/
  referencesAirlinesByAirlineCodeGet(
    req: operations.ReferencesAirlinesByAirlineCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAirlinesByAirlineCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAirlinesByAirlineCodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/airlines/{airlineCode}", req.pathParams);
    
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
        const res: operations.ReferencesAirlinesByAirlineCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referencesAirlinesByAirlineCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * referencesAirportsByAirportCodeGet - Airports
   *
   * List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
  **/
  referencesAirportsByAirportCodeGet(
    req: operations.ReferencesAirportsByAirportCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAirportsByAirportCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAirportsByAirportCodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/airports/{airportCode}", req.pathParams);
    
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
        const res: operations.ReferencesAirportsByAirportCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.airportResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * referencesAirportsNearestByLatitudeAndLongitudeGet - Nearest Airports
   *
   * List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
  **/
  referencesAirportsNearestByLatitudeAndLongitudeGet(
    req: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/airports/nearest/{latitude},{longitude}", req.pathParams);
    
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
        const res: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * referencesCitiesByCityCodeGet - Cities
   *
   * List all cities or one specific city. It is possible to request the response in a specific language.
  **/
  referencesCitiesByCityCodeGet(
    req: operations.ReferencesCitiesByCityCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesCitiesByCityCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesCitiesByCityCodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/cities/{cityCode}", req.pathParams);
    
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
        const res: operations.ReferencesCitiesByCityCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referencesCitiesByCityCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * referencesCountriesByCountryCodeGet - Countries
   *
   * List all countries or one specific country. It is possible to request the response in a specific language.
  **/
  referencesCountriesByCountryCodeGet(
    req: operations.ReferencesCountriesByCountryCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesCountriesByCountryCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesCountriesByCountryCodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/countries/{countryCode}", req.pathParams);
    
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
        const res: operations.ReferencesCountriesByCountryCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.referencesCountriesByCountryCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
