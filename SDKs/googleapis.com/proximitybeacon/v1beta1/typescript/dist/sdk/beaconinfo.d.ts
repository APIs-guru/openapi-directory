import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Beaconinfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * proximitybeaconBeaconinfoGetforobserved - Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key) for the application.
    **/
    proximitybeaconBeaconinfoGetforobserved(req: operations.ProximitybeaconBeaconinfoGetforobservedRequest, config?: AxiosRequestConfig): Promise<operations.ProximitybeaconBeaconinfoGetforobservedResponse>;
}
