import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PortSchedules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkSwitchPortSchedule - Add a switch port schedule
     *
     * Add a switch port schedule
    **/
    createNetworkSwitchPortSchedule(req: operations.CreateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchPortScheduleResponse>;
    /**
     * deleteNetworkSwitchPortSchedule - Delete a switch port schedule
     *
     * Delete a switch port schedule
    **/
    deleteNetworkSwitchPortSchedule(req: operations.DeleteNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchPortScheduleResponse>;
    /**
     * getNetworkSwitchPortSchedules - List switch port schedules
     *
     * List switch port schedules
    **/
    getNetworkSwitchPortSchedules(req: operations.GetNetworkSwitchPortSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchPortSchedulesResponse>;
    /**
     * updateNetworkSwitchPortSchedule - Update a switch port schedule
     *
     * Update a switch port schedule
    **/
    updateNetworkSwitchPortSchedule(req: operations.UpdateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchPortScheduleResponse>;
}
