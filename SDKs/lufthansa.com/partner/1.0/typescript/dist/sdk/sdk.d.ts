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
     * Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS
    **/
    AllFares(req: operations.AllFaresRequest, config?: AxiosRequestConfig): Promise<operations.AllFaresResponse>;
    /**
     * Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners
    **/
    AutoCheckIn(req: operations.AutoCheckInRequest, config?: AxiosRequestConfig): Promise<operations.AutoCheckInResponse>;
    /**
     * Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners
    **/
    BaggageTripAndContact(req: operations.BaggageTripAndContactRequest, config?: AxiosRequestConfig): Promise<operations.BaggageTripAndContactResponse>;
    /**
     * Retrieve best fares for the requested journey across multiple days or multiple months.
    **/
    BestFares(req: operations.BestFaresRequest, config?: AxiosRequestConfig): Promise<operations.BestFaresResponse>;
    /**
     * Returns valid deep links for the provided input parameters
    **/
    DeepLinks(req: operations.DeepLinksRequest, config?: AxiosRequestConfig): Promise<operations.DeepLinksResponse>;
    /**
     * Retrieve all available fares per fare family for a specific Origin & Destination on a given date
    **/
    Fares(req: operations.FaresRequest, config?: AxiosRequestConfig): Promise<operations.FaresResponse>;
    /**
     * Create a subscription for best price O&D. Receive regular updates on lowest fares
    **/
    FaresSubscriptions(req: operations.FaresSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.FaresSubscriptionsResponse>;
    /**
     * Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)
    **/
    LhDeepLinksFfp(req: operations.LhDeepLinksFfpRequest, config?: AxiosRequestConfig): Promise<operations.LhDeepLinksFfpResponse>;
    /**
     * Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)
    **/
    LhDeepLinksItco(req: operations.LhDeepLinksItcoRequest, config?: AxiosRequestConfig): Promise<operations.LhDeepLinksItcoResponse>;
    /**
     * Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH
    **/
    LowestFares(req: operations.LowestFaresRequest, config?: AxiosRequestConfig): Promise<operations.LowestFaresResponse>;
    /**
     * Returns LH route origin & destination information
    **/
    OndRoute(req: operations.OndRouteRequest, config?: AxiosRequestConfig): Promise<operations.OndRouteResponse>;
    /**
     * Returns LH network route status information. Search for recently added or retired routes
    **/
    OndStatus(req: operations.OndStatusRequest, config?: AxiosRequestConfig): Promise<operations.OndStatusResponse>;
    /**
     * Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners
    **/
    Orders(req: operations.OrdersRequest, config?: AxiosRequestConfig): Promise<operations.OrdersResponse>;
    /**
     * Retrieve a best price offer given an origin and destination.
    **/
    PriceOffers(req: operations.PriceOffersRequest, config?: AxiosRequestConfig): Promise<operations.PriceOffersResponse>;
    /**
     * A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.
    **/
    SeatDetails(req: operations.SeatDetailsRequest, config?: AxiosRequestConfig): Promise<operations.SeatDetailsResponse>;
    /**
     * Returns LH Top routes per country or across all countries
    **/
    TopOnd(req: operations.TopOndRequest, config?: AxiosRequestConfig): Promise<operations.TopOndResponse>;
}
export {};
