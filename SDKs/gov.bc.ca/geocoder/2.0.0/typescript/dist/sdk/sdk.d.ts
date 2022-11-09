import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.
    **/
    GetAddressesOutputFormat(req: operations.GetAddressesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressesOutputFormatResponse>;
    /**
     * Represents a individual intersection
    **/
    GetIntersectionsIntersectionIdOutputFormat(req: operations.GetIntersectionsIntersectionIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsIntersectionIdOutputFormatResponse>;
    /**
     * Represents intersections near a given point
    **/
    GetIntersectionsNearOutputFormat(req: operations.GetIntersectionsNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsNearOutputFormatResponse>;
    /**
     * Represents the closest intersection to a given point
    **/
    GetIntersectionsNearestOutputFormat(req: operations.GetIntersectionsNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsNearestOutputFormatResponse>;
    /**
     * Represents all intersections within a given area
    **/
    GetIntersectionsWithinOutputFormat(req: operations.GetIntersectionsWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsWithinOutputFormatResponse>;
    /**
     * Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.
    **/
    GetOccupantsAddressesOutputFormat(req: operations.GetOccupantsAddressesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsAddressesOutputFormatResponse>;
    /**
     * Represents occupants near a given point in order of closest to farthest
    **/
    GetOccupantsNearOutputFormat(req: operations.GetOccupantsNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsNearOutputFormatResponse>;
    /**
     * Represents the closest occupant to a given point
    **/
    GetOccupantsNearestOutputFormat(req: operations.GetOccupantsNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsNearestOutputFormatResponse>;
    /**
     * Represents an individual occupant
    **/
    GetOccupantsOccupantIdOutputFormat(req: operations.GetOccupantsOccupantIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsOccupantIdOutputFormatResponse>;
    /**
     * Represents all occupants within a given area
    **/
    GetOccupantsWithinOutputFormat(req: operations.GetOccupantsWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsWithinOutputFormatResponse>;
    /**
     * Represents all parcel identifiers associated with an individual site
    **/
    GetParcelsPidsSiteIdOutputFormat(req: operations.GetParcelsPidsSiteIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetParcelsPidsSiteIdOutputFormatResponse>;
    /**
     * Represents sites near a given point in the order of closest to farthest
    **/
    GetSitesNearOutputFormat(req: operations.GetSitesNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesNearOutputFormatResponse>;
    /**
     * Represents the site nearest a given point
    **/
    GetSitesNearestOutputFormat(req: operations.GetSitesNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesNearestOutputFormatResponse>;
    /**
     * Represents an individual site
    **/
    GetSitesSiteIdOutputFormat(req: operations.GetSitesSiteIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesSiteIdOutputFormatResponse>;
    /**
     * Represents all subsites of a given site
    **/
    GetSitesSiteIdSubsitesOutputFormat(req: operations.GetSitesSiteIdSubsitesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesSiteIdSubsitesOutputFormatResponse>;
    /**
     * Represents sites within a given area
    **/
    GetSitesWithinOutputFormat(req: operations.GetSitesWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesWithinOutputFormatResponse>;
}
export {};
