import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IsochroneApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getIsochrone - Isochrone Endpoint
     *
     * ### Example
     * You can get an example response via:
     *
     * ```
     * curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
     * ```
     *
     * Don't forget to replace the placeholder with your own key.
     *
     * ### Introduction
     * ![Isochrone screenshot](./img/isochrone-example.png)
     *
     * An isochrone of a location is ''a line connecting points at which a vehicle arrives at the same time'', see Wikipedia.
     * With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
     *
     * ### Use Cases
     * Some possible areas in which this API may be useful to you:
     *
     * - real estate analysis
     * - realtors
     * - vehicle scheduling
     * - geomarketing
     * - reach of electric vehicles
     * - transport planning
     * - logistics (distribution and retail network planning)
     *
     * ### API Clients and Examples
     * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
     *
    **/
    getIsochrone(req: operations.GetIsochroneRequest, config?: AxiosRequestConfig): Promise<operations.GetIsochroneResponse>;
}
