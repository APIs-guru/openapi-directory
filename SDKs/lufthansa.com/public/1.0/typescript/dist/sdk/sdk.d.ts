import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
    **/
    CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse>;
    /**
     * With this tracking service you can easily retrieve your shipment or flight status information.
    **/
    CargoShipmentTrackingByAwbPrefixAndAwbNumberGet(req: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest, config?: AxiosRequestConfig): Promise<operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse>;
    /**
     * Lounge information
    **/
    OffersLoungesByLocationGet(req: operations.OffersLoungesByLocationGetRequest, config?: AxiosRequestConfig): Promise<operations.OffersLoungesByLocationGetResponse>;
    /**
     * Cabin layout and seat characteristics.
    **/
    OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(req: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest, config?: AxiosRequestConfig): Promise<operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse>;
    /**
     * Status of all arrivals at a given airport up to 4 hours from the provided date time.
    **/
    OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * Status of a particular flight (boarding, delayed, etc.).
    **/
    OperationsFlightstatusByFlightNumberAndDateGet(req: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusByFlightNumberAndDateGetResponse>;
    /**
     * Status of all departures from a given airport up to 4 hours from the provided date time.
    **/
    OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * Status of flights between a given origin and destination on a given date.
    **/
    OperationsFlightstatusRouteDateByOriginAndDestinationGet(req: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse>;
    /**
     * Scheduled flights between given airports on a given date.
    **/
    OperationsSchedulesFromDateTimeByOriginAndDestinationGet(req: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse>;
    /**
     * List all aircraft types or one specific aircraft type.
    **/
    ReferencesAircraftByAircraftCodeGet(req: operations.ReferencesAircraftByAircraftCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAircraftByAircraftCodeGetResponse>;
    /**
     * List all airlines or one specific airline.
    **/
    ReferencesAirlinesByAirlineCodeGet(req: operations.ReferencesAirlinesByAirlineCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirlinesByAirlineCodeGetResponse>;
    /**
     * List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
    **/
    ReferencesAirportsByAirportCodeGet(req: operations.ReferencesAirportsByAirportCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsByAirportCodeGetResponse>;
    /**
     * List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
    **/
    ReferencesAirportsNearestByLatitudeAndLongitudeGet(req: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse>;
    /**
     * List all cities or one specific city. It is possible to request the response in a specific language.
    **/
    ReferencesCitiesByCityCodeGet(req: operations.ReferencesCitiesByCityCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesCitiesByCityCodeGetResponse>;
    /**
     * List all countries or one specific country. It is possible to request the response in a specific language.
    **/
    ReferencesCountriesByCountryCodeGet(req: operations.ReferencesCountriesByCountryCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesCountriesByCountryCodeGetResponse>;
}
export {};
