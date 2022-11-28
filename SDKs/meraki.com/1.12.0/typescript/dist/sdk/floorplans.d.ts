import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloorPlans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkFloorPlan - Upload a floor plan
     *
     * Upload a floor plan
    **/
    createNetworkFloorPlan(req: operations.CreateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFloorPlanResponse>;
    /**
     * deleteNetworkFloorPlan - Destroy a floor plan
     *
     * Destroy a floor plan
    **/
    deleteNetworkFloorPlan(req: operations.DeleteNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkFloorPlanResponse>;
    /**
     * getNetworkFloorPlan - Find a floor plan by ID
     *
     * Find a floor plan by ID
    **/
    getNetworkFloorPlan(req: operations.GetNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlanResponse>;
    /**
     * getNetworkFloorPlans - List the floor plans that belong to your network
     *
     * List the floor plans that belong to your network
    **/
    getNetworkFloorPlans(req: operations.GetNetworkFloorPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlansResponse>;
    /**
     * updateNetworkFloorPlan - Update a floor plan's geolocation and other meta data
     *
     * Update a floor plan's geolocation and other meta data
    **/
    updateNetworkFloorPlan(req: operations.UpdateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFloorPlanResponse>;
}
