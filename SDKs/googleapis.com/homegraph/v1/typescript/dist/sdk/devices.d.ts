import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * homegraphDevicesQuery - Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.
    **/
    homegraphDevicesQuery(req: operations.HomegraphDevicesQueryRequest, config?: AxiosRequestConfig): Promise<operations.HomegraphDevicesQueryResponse>;
    /**
     * homegraphDevicesReportStateAndNotification - Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.google.com/assistant/smarthome/develop/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.google.com/assistant/smarthome/concepts/devices-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.
    **/
    homegraphDevicesReportStateAndNotification(req: operations.HomegraphDevicesReportStateAndNotificationRequest, config?: AxiosRequestConfig): Promise<operations.HomegraphDevicesReportStateAndNotificationResponse>;
    /**
     * homegraphDevicesRequestSync - Requests Google to send an `action.devices.SYNC` [intent](https://developers.google.com/assistant/smarthome/reference/intent/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.
    **/
    homegraphDevicesRequestSync(req: operations.HomegraphDevicesRequestSyncRequest, config?: AxiosRequestConfig): Promise<operations.HomegraphDevicesRequestSyncResponse>;
    /**
     * homegraphDevicesSync - Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.
    **/
    homegraphDevicesSync(req: operations.HomegraphDevicesSyncRequest, config?: AxiosRequestConfig): Promise<operations.HomegraphDevicesSyncResponse>;
}
