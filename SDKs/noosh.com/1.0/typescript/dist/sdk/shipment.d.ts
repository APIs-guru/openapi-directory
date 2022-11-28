import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Shipment {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getShipment - Get a specific shipment.
     *
     * Get a specific shipment.
    **/
    getShipment(req: operations.GetShipmentRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentResponse>;
    /**
     * getShipmentList - List shipments of project
     *
     * List shipments of project
    **/
    getShipmentList(req: operations.GetShipmentListRequest, config?: AxiosRequestConfig): Promise<operations.GetShipmentListResponse>;
    /**
     * postShipment - Create a shipment
     *
     * Create a shipment
    **/
    postShipment(req: operations.PostShipmentRequest, config?: AxiosRequestConfig): Promise<operations.PostShipmentResponse>;
    /**
     * putShipmentLocation - Update a specific shipment location
     *
     * Update a specific shipment location
    **/
    putShipmentLocation(req: operations.PutShipmentLocationRequest, config?: AxiosRequestConfig): Promise<operations.PutShipmentLocationResponse>;
}
