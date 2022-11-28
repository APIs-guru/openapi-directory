import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GeocodingApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGeocode - Geocoding Endpoint
     *
     *
     * ### Introduction
     *
     * ![Geocoding Example](./img/geocoding-example.png)
     *
     * _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
     * For example the conversion from `Berlin` to `52.5170365,13.3888599`.
     *
     * _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).
     *
    **/
    getGeocode(req: operations.GetGeocodeRequest, config?: AxiosRequestConfig): Promise<operations.GetGeocodeResponse>;
}
