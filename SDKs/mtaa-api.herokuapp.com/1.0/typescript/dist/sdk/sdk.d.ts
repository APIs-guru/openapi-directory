import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://mtaa-api.herokuapp.com/api"];
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
     * districtsInARegion - Returns all districts in region
     *
     * Returns a post code and all districts in a specified region
    **/
    districtsInARegion(req: operations.DistrictsInARegionRequest, config?: AxiosRequestConfig): Promise<operations.DistrictsInARegionResponse>;
    /**
     * tanzaniaRegions - Returns all regions present in Tanzania
     *
     * Fetches all regions present in Tanzania and then return a response as json
    **/
    tanzaniaRegions(req: operations.TanzaniaRegionsRequest, config?: AxiosRequestConfig): Promise<operations.TanzaniaRegionsResponse>;
    /**
     * wardsInADistrict - Returns all wards in a district
     *
     * Returns all wards in a  specified district and district postcode
    **/
    wardsInADistrict(req: operations.WardsInADistrictRequest, config?: AxiosRequestConfig): Promise<operations.WardsInADistrictResponse>;
    /**
     * neighborhoodInAStreet - Returns all neighborhood in a street
     *
     * Returns all neighborhood in a specified street
    **/
    neighborhoodInAStreet(req: operations.NeighborhoodInAStreetRequest, config?: AxiosRequestConfig): Promise<operations.NeighborhoodInAStreetResponse>;
    /**
     * streetsInAWard - Returns all streets in a ward
     *
     * Returns all streets in a specified ward and ward postcode
    **/
    streetsInAWard(req: operations.StreetsInAWardRequest, config?: AxiosRequestConfig): Promise<operations.StreetsInAWardResponse>;
}
export {};
