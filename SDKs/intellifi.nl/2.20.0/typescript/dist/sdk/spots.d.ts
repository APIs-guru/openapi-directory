import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Spots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addSpotSet - Create spotset
    **/
    addSpotSet(req: operations.AddSpotSetRequest, config?: AxiosRequestConfig): Promise<operations.AddSpotSetResponse>;
    /**
     * getSpotById - Get spot
    **/
    getSpotById(req: operations.GetSpotByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotByIdResponse>;
    /**
     * getSpotSetById - Get spotset
    **/
    getSpotSetById(req: operations.GetSpotSetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotSetByIdResponse>;
    /**
     * getSpotSetsById - Get spotsets
    **/
    getSpotSetsById(req: operations.GetSpotSetsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotSetsByIdResponse>;
    /**
     * getSpots - Get all spots
    **/
    getSpots(req: operations.GetSpotsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotsResponse>;
    /**
     * updateSpot - Update existing spot
    **/
    updateSpot(req: operations.UpdateSpotRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpotResponse>;
    /**
     * updateSpotSet - Update existing spotset
    **/
    updateSpotSet(req: operations.UpdateSpotSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpotSetResponse>;
}
