import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAddressesOutputFormat - Geocode an address
     *
     * Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.
    **/
    getAddressesOutputFormat(req: operations.GetAddressesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressesOutputFormatResponse>;
    /**
     * getSitesNearOutputFormat - Find sites near to a geographic point
     *
     * Represents sites near a given point in the order of closest to farthest
    **/
    getSitesNearOutputFormat(req: operations.GetSitesNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesNearOutputFormatResponse>;
    /**
     * getSitesNearestOutputFormat - Find the site nearest to a geographic point
     *
     * Represents the site nearest a given point
    **/
    getSitesNearestOutputFormat(req: operations.GetSitesNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesNearestOutputFormatResponse>;
    /**
     * getSitesSiteIdOutputFormat - Get a site by its unique ID
     *
     * Represents an individual site
    **/
    getSitesSiteIdOutputFormat(req: operations.GetSitesSiteIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesSiteIdOutputFormatResponse>;
    /**
     * getSitesSiteIdSubsitesOutputFormat - Represents all subsites of a given site
     *
     * Represents all subsites of a given site
    **/
    getSitesSiteIdSubsitesOutputFormat(req: operations.GetSitesSiteIdSubsitesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesSiteIdSubsitesOutputFormatResponse>;
    /**
     * getSitesWithinOutputFormat - Find sites in a geographic area
     *
     * Represents sites within a given area
    **/
    getSitesWithinOutputFormat(req: operations.GetSitesWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSitesWithinOutputFormatResponse>;
}
