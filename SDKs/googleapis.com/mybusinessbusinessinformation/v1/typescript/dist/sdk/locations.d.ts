import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessbusinessinformationLocationsAssociate - Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.
    **/
    mybusinessbusinessinformationLocationsAssociate(req: operations.MybusinessbusinessinformationLocationsAssociateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationLocationsAssociateResponse>;
    /**
     * mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated - Gets the Google-updated version of the specified location.
    **/
    mybusinessbusinessinformationLocationsAttributesGetGoogleUpdated(req: operations.MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedResponse>;
    /**
     * mybusinessbusinessinformationLocationsClearLocationAssociation - Clears an association between a location and its place ID. This operation is only valid if the location is unverified.
    **/
    mybusinessbusinessinformationLocationsClearLocationAssociation(req: operations.MybusinessbusinessinformationLocationsClearLocationAssociationRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationLocationsClearLocationAssociationResponse>;
    /**
     * mybusinessbusinessinformationLocationsDelete - Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
    **/
    mybusinessbusinessinformationLocationsDelete(req: operations.MybusinessbusinessinformationLocationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationLocationsDeleteResponse>;
    /**
     * mybusinessbusinessinformationLocationsGetAttributes - Looks up all the attributes set for a given location.
    **/
    mybusinessbusinessinformationLocationsGetAttributes(req: operations.MybusinessbusinessinformationLocationsGetAttributesRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationLocationsGetAttributesResponse>;
    /**
     * mybusinessbusinessinformationLocationsUpdateAttributes - Update attributes for a given location.
    **/
    mybusinessbusinessinformationLocationsUpdateAttributes(req: operations.MybusinessbusinessinformationLocationsUpdateAttributesRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessbusinessinformationLocationsUpdateAttributesResponse>;
}
