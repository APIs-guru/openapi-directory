import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ospf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchRoutingOspf - Return layer 3 OSPF routing configuration
     *
     * Return layer 3 OSPF routing configuration
    **/
    getNetworkSwitchRoutingOspf(req: operations.GetNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingOspfResponse>;
    /**
     * updateNetworkSwitchRoutingOspf - Update layer 3 OSPF routing configuration
     *
     * Update layer 3 OSPF routing configuration
    **/
    updateNetworkSwitchRoutingOspf(req: operations.UpdateNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingOspfResponse>;
}
