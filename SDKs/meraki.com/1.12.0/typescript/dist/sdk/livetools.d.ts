import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LiveTools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * blinkDeviceLeds - Blink the LEDs on a device
     *
     * Blink the LEDs on a device
    **/
    blinkDeviceLeds(req: operations.BlinkDeviceLedsRequest, config?: AxiosRequestConfig): Promise<operations.BlinkDeviceLedsResponse>;
    /**
     * cycleDeviceSwitchPorts - Cycle a set of switch ports
     *
     * Cycle a set of switch ports
    **/
    cycleDeviceSwitchPorts(req: operations.CycleDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.CycleDeviceSwitchPortsResponse>;
    /**
     * rebootDevice - Reboot a device
     *
     * Reboot a device
    **/
    rebootDevice(req: operations.RebootDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RebootDeviceResponse>;
}
