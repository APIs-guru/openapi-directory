import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Occupants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOccupantsAddressesOutputFormat - Geocode an address and identify site occupants
     *
     * Represents the set of occupants whose addresses best match a given query address. Every occupant has an associated site which has a standardized address and a coordinate location on the Earth.
    **/
    getOccupantsAddressesOutputFormat(req: operations.GetOccupantsAddressesOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsAddressesOutputFormatResponse>;
    /**
     * getOccupantsNearOutputFormat - Find occupants of sites near to a geographic point
     *
     * Represents occupants near a given point in order of closest to farthest
    **/
    getOccupantsNearOutputFormat(req: operations.GetOccupantsNearOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsNearOutputFormatResponse>;
    /**
     * getOccupantsNearestOutputFormat - Find occupants of the site nearest to a geographic point
     *
     * Represents the closest occupant to a given point
    **/
    getOccupantsNearestOutputFormat(req: operations.GetOccupantsNearestOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsNearestOutputFormatResponse>;
    /**
     * getOccupantsOccupantIdOutputFormat - Get an occupant (of a site) by its unique ID
     *
     * Represents an individual occupant
    **/
    getOccupantsOccupantIdOutputFormat(req: operations.GetOccupantsOccupantIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsOccupantIdOutputFormatResponse>;
    /**
     * getOccupantsWithinOutputFormat - Find occupants of sites in a geographic area
     *
     * Represents all occupants within a given area
    **/
    getOccupantsWithinOutputFormat(req: operations.GetOccupantsWithinOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOccupantsWithinOutputFormatResponse>;
}
