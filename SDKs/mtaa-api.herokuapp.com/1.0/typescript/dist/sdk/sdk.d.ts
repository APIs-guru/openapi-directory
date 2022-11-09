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
     * Returns a post code and all districts in a specified region
    **/
    DistrictsInARegion(req: operations.DistrictsInARegionRequest, config?: AxiosRequestConfig): Promise<operations.DistrictsInARegionResponse>;
    /**
     * Fetches all regions present in Tanzania and then return a response as json
    **/
    TanzaniaRegions(req: operations.TanzaniaRegionsRequest, config?: AxiosRequestConfig): Promise<operations.TanzaniaRegionsResponse>;
    /**
     * Returns all wards in a  specified district and district postcode
    **/
    WardsInADistrict(req: operations.WardsInADistrictRequest, config?: AxiosRequestConfig): Promise<operations.WardsInADistrictResponse>;
    /**
     * Returns all neighborhood in a specified street
    **/
    NeighborhoodInAStreet(req: operations.NeighborhoodInAStreetRequest, config?: AxiosRequestConfig): Promise<operations.NeighborhoodInAStreetResponse>;
    /**
     * Returns all streets in a specified ward and ward postcode
    **/
    StreetsInAWard(req: operations.StreetsInAWardRequest, config?: AxiosRequestConfig): Promise<operations.StreetsInAWardResponse>;
}
export {};
