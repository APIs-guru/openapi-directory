import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Intersections {
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
     * getIntersectionsIntersectionIdOutputFormat - Get an intersection by its unique ID
     *
     * Represents a individual intersection
    **/
    getIntersectionsIntersectionIdOutputFormat(req: operations.GetIntersectionsIntersectionIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsIntersectionIdOutputFormatResponse>;
    /**
     * getIntersectionsNearOutputFormat - Find intersections near to a geographic point
     *
     * Represents intersections near a given point
    **/
    getIntersectionsNearOutputFormat(req: operations.GetIntersectionsNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsNearOutputFormatResponse>;
    /**
     * getIntersectionsNearestOutputFormat - Find nearest intersection to a geographic point
     *
     * Represents the closest intersection to a given point
    **/
    getIntersectionsNearestOutputFormat(req: operations.GetIntersectionsNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsNearestOutputFormatResponse>;
    /**
     * getIntersectionsWithinOutputFormat - Find intersections in a geographic area
     *
     * Represents all intersections within a given area
    **/
    getIntersectionsWithinOutputFormat(req: operations.GetIntersectionsWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetIntersectionsWithinOutputFormatResponse>;
}
