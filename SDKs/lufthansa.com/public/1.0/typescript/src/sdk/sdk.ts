import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // CargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
  /** 
   * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
  **/
  CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(
    req: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
  /** 
   * With this tracking service you can easily retrieve your shipment or flight status information.
  **/
  CargoShipmentTrackingByAwbPrefixAndAwbNumberGet(
    req: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.cargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OffersLoungesByLocationGet - Lounges
  /** 
   * Lounge information
  **/
  OffersLoungesByLocationGet(
    req: operations.OffersLoungesByLocationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OffersLoungesByLocationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OffersLoungesByLocationGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/offers/lounges/{location}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OffersLoungesByLocationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.offersLoungesByLocationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet - Seat Maps
  /** 
   * Cabin layout and seat characteristics.
  **/
  OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(
    req: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
  /** 
   * Status of all arrivals at a given airport up to 4 hours from the provided date time.
  **/
  OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(
    req: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OperationsFlightstatusByFlightNumberAndDateGet - Flight Status
  /** 
   * Status of a particular flight (boarding, delayed, etc.).
  **/
  OperationsFlightstatusByFlightNumberAndDateGet(
    req: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusByFlightNumberAndDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusByFlightNumberAndDateGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/{flightNumber}/{date}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OperationsFlightstatusByFlightNumberAndDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusByFlightNumberAndDateGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
  /** 
   * Status of all departures from a given airport up to 4 hours from the provided date time.
  **/
  OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(
    req: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OperationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
  /** 
   * Status of flights between a given origin and destination on a given date.
  **/
  OperationsFlightstatusRouteDateByOriginAndDestinationGet(
    req: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/flightstatus/route/{origin}/{destination}/{date}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OperationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
  /** 
   * Scheduled flights between given airports on a given date.
  **/
  OperationsSchedulesFromDateTimeByOriginAndDestinationGet(
    req: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/operations/schedules/{origin}/{destination}/{fromDateTime}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReferencesAircraftByAircraftCodeGet - Aircraft
  /** 
   * List all aircraft types or one specific aircraft type.
  **/
  ReferencesAircraftByAircraftCodeGet(
    req: operations.ReferencesAircraftByAircraftCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAircraftByAircraftCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAircraftByAircraftCodeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/aircraft/{aircraftCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReferencesAircraftByAircraftCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.referencesAircraftByAircraftCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReferencesAirlinesByAirlineCodeGet - Airlines
  /** 
   * List all airlines or one specific airline.
  **/
  ReferencesAirlinesByAirlineCodeGet(
    req: operations.ReferencesAirlinesByAirlineCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAirlinesByAirlineCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAirlinesByAirlineCodeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/airlines/{airlineCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReferencesAirlinesByAirlineCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.referencesAirlinesByAirlineCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReferencesAirportsByAirportCodeGet - Airports
  /** 
   * List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
  **/
  ReferencesAirportsByAirportCodeGet(
    req: operations.ReferencesAirportsByAirportCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAirportsByAirportCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAirportsByAirportCodeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/airports/{airportCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReferencesAirportsByAirportCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.airportResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReferencesAirportsNearestByLatitudeAndLongitudeGet - Nearest Airports
  /** 
   * List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
  **/
  ReferencesAirportsNearestByLatitudeAndLongitudeGet(
    req: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/airports/nearest/{latitude},{longitude}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReferencesCitiesByCityCodeGet - Cities
  /** 
   * List all cities or one specific city. It is possible to request the response in a specific language.
  **/
  ReferencesCitiesByCityCodeGet(
    req: operations.ReferencesCitiesByCityCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesCitiesByCityCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesCitiesByCityCodeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/cities/{cityCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReferencesCitiesByCityCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.referencesCitiesByCityCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReferencesCountriesByCountryCodeGet - Countries
  /** 
   * List all countries or one specific country. It is possible to request the response in a specific language.
  **/
  ReferencesCountriesByCountryCodeGet(
    req: operations.ReferencesCountriesByCountryCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReferencesCountriesByCountryCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReferencesCountriesByCountryCodeGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/references/countries/{countryCode}", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReferencesCountriesByCountryCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.referencesCountriesByCountryCodeGet200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
