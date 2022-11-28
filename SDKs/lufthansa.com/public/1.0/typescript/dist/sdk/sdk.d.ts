import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.lufthansa.com/v1"];
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
     * cargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
     *
     * Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
    **/
    cargoGetRouteFromDateProductCodeByOriginAndDestinationGet(req: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse>;
    /**
     * cargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
     *
     * With this tracking service you can easily retrieve your shipment or flight status information.
    **/
    cargoShipmentTrackingByAwbPrefixAndAwbNumberGet(req: operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest, config?: AxiosRequestConfig): Promise<operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse>;
    /**
     * offersLoungesByLocationGet - Lounges
     *
     * Lounge information
    **/
    offersLoungesByLocationGet(req: operations.OffersLoungesByLocationGetRequest, config?: AxiosRequestConfig): Promise<operations.OffersLoungesByLocationGetResponse>;
    /**
     * offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet - Seat Maps
     *
     * Cabin layout and seat characteristics.
    **/
    offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(req: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest, config?: AxiosRequestConfig): Promise<operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse>;
    /**
     * operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
     *
     * Status of all arrivals at a given airport up to 4 hours from the provided date time.
    **/
    operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * operationsFlightstatusByFlightNumberAndDateGet - Flight Status
     *
     * Status of a particular flight (boarding, delayed, etc.).
    **/
    operationsFlightstatusByFlightNumberAndDateGet(req: operations.OperationsFlightstatusByFlightNumberAndDateGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusByFlightNumberAndDateGetResponse>;
    /**
     * operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
     *
     * Status of all departures from a given airport up to 4 hours from the provided date time.
    **/
    operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(req: operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse>;
    /**
     * operationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
     *
     * Status of flights between a given origin and destination on a given date.
    **/
    operationsFlightstatusRouteDateByOriginAndDestinationGet(req: operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse>;
    /**
     * operationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
     *
     * Scheduled flights between given airports on a given date.
    **/
    operationsSchedulesFromDateTimeByOriginAndDestinationGet(req: operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest, config?: AxiosRequestConfig): Promise<operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse>;
    /**
     * referencesAircraftByAircraftCodeGet - Aircraft
     *
     * List all aircraft types or one specific aircraft type.
    **/
    referencesAircraftByAircraftCodeGet(req: operations.ReferencesAircraftByAircraftCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAircraftByAircraftCodeGetResponse>;
    /**
     * referencesAirlinesByAirlineCodeGet - Airlines
     *
     * List all airlines or one specific airline.
    **/
    referencesAirlinesByAirlineCodeGet(req: operations.ReferencesAirlinesByAirlineCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirlinesByAirlineCodeGetResponse>;
    /**
     * referencesAirportsByAirportCodeGet - Airports
     *
     * List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
    **/
    referencesAirportsByAirportCodeGet(req: operations.ReferencesAirportsByAirportCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsByAirportCodeGetResponse>;
    /**
     * referencesAirportsNearestByLatitudeAndLongitudeGet - Nearest Airports
     *
     * List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
    **/
    referencesAirportsNearestByLatitudeAndLongitudeGet(req: operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse>;
    /**
     * referencesCitiesByCityCodeGet - Cities
     *
     * List all cities or one specific city. It is possible to request the response in a specific language.
    **/
    referencesCitiesByCityCodeGet(req: operations.ReferencesCitiesByCityCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesCitiesByCityCodeGetResponse>;
    /**
     * referencesCountriesByCountryCodeGet - Countries
     *
     * List all countries or one specific country. It is possible to request the response in a specific language.
    **/
    referencesCountriesByCountryCodeGet(req: operations.ReferencesCountriesByCountryCodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ReferencesCountriesByCountryCodeGetResponse>;
}
export {};
