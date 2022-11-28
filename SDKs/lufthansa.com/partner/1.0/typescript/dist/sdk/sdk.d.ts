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
     * allFares - All Fares
     *
     * Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS
    **/
    allFares(req: operations.AllFaresRequest, config?: AxiosRequestConfig): Promise<operations.AllFaresResponse>;
    /**
     * autoCheckIn - Auto Check-In
     *
     * Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners
    **/
    autoCheckIn(req: operations.AutoCheckInRequest, config?: AxiosRequestConfig): Promise<operations.AutoCheckInResponse>;
    /**
     * baggageTripAndContact - Baggage Trip and Contact
     *
     * Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners
    **/
    baggageTripAndContact(req: operations.BaggageTripAndContactRequest, config?: AxiosRequestConfig): Promise<operations.BaggageTripAndContactResponse>;
    /**
     * bestFares - Best Fares
     *
     * Retrieve best fares for the requested journey across multiple days or multiple months.
    **/
    bestFares(req: operations.BestFaresRequest, config?: AxiosRequestConfig): Promise<operations.BestFaresResponse>;
    /**
     * deepLinks - Deep Links
     *
     * Returns valid deep links for the provided input parameters
    **/
    deepLinks(req: operations.DeepLinksRequest, config?: AxiosRequestConfig): Promise<operations.DeepLinksResponse>;
    /**
     * fares - Fares
     *
     * Retrieve all available fares per fare family for a specific Origin & Destination on a given date
    **/
    fares(req: operations.FaresRequest, config?: AxiosRequestConfig): Promise<operations.FaresResponse>;
    /**
     * faresSubscriptions - Fares Subscriptions
     *
     * Create a subscription for best price O&D. Receive regular updates on lowest fares
    **/
    faresSubscriptions(req: operations.FaresSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.FaresSubscriptionsResponse>;
    /**
     * lhDeepLinksFfp - LH Deep Links - FFP
     *
     * Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)
    **/
    lhDeepLinksFfp(req: operations.LhDeepLinksFfpRequest, config?: AxiosRequestConfig): Promise<operations.LhDeepLinksFfpResponse>;
    /**
     * lhDeepLinksItco - LH Deep Links - ITCO
     *
     * Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)
    **/
    lhDeepLinksItco(req: operations.LhDeepLinksItcoRequest, config?: AxiosRequestConfig): Promise<operations.LhDeepLinksItcoResponse>;
    /**
     * lowestFares - Lowest Fares
     *
     * Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH
    **/
    lowestFares(req: operations.LowestFaresRequest, config?: AxiosRequestConfig): Promise<operations.LowestFaresResponse>;
    /**
     * ondRoute - OND Route
     *
     * Returns LH route origin & destination information
    **/
    ondRoute(req: operations.OndRouteRequest, config?: AxiosRequestConfig): Promise<operations.OndRouteResponse>;
    /**
     * ondStatus - OND Status
     *
     * Returns LH network route status information. Search for recently added or retired routes
    **/
    ondStatus(req: operations.OndStatusRequest, config?: AxiosRequestConfig): Promise<operations.OndStatusResponse>;
    /**
     * orders - Orders
     *
     * Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners
    **/
    orders(req: operations.OrdersRequest, config?: AxiosRequestConfig): Promise<operations.OrdersResponse>;
    /**
     * priceOffers - Price Offers
     *
     * Retrieve a best price offer given an origin and destination.
    **/
    priceOffers(req: operations.PriceOffersRequest, config?: AxiosRequestConfig): Promise<operations.PriceOffersResponse>;
    /**
     * seatDetails - Seat Details
     *
     * A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.
    **/
    seatDetails(req: operations.SeatDetailsRequest, config?: AxiosRequestConfig): Promise<operations.SeatDetailsResponse>;
    /**
     * topOnd - Top OND
     *
     * Returns LH Top routes per country or across all countries
    **/
    topOnd(req: operations.TopOndRequest, config?: AxiosRequestConfig): Promise<operations.TopOndResponse>;
}
export {};
