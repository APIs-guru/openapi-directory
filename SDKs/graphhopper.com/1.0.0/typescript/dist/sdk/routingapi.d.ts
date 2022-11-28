import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class RoutingApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRouteInfo - Coverage information
     *
     * Use this to find out details about the supported vehicle profiles and features, or if you just need to ping the server.
     *
    **/
    getRouteInfo(config?: AxiosRequestConfig): Promise<operations.GetRouteInfoResponse>;
    /**
     * getRoute - GET Route Endpoint
     *
     * The GET request is the most simple one: just specify the parameter in the URL and you are done.
     * Can be tried directly in every browser.
     *
    **/
    getRoute(req: operations.GetRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteResponse>;
    /**
     * postRoute - POST Route Endpoint
     *
     * Please see the [GET endpoint](#operation/getRoute) for a simpler method on how to get started.
     * If you are familiar with POST requests and JSON then do not hesitate to continue here.
     *
     * Especially when you use many locations you should get familiar with this POST endpoint as the GET endpoint
     * has an URL length limitation. Additionally the request of this POST endpoint can be compressed and can slightly
     * speed up the request.
     *
     * To do a request you send JSON data. Both request scenarios GET and POST are identical except that all singular parameter names are named as their plural for a POST request.
     * The effected parameters are: `points`, `point_hints` and `snap_preventions`.
     *
     * **Please note that in opposite to the GET endpoint, points are specified in the order of `longitude, latitude`**.
     *
     * For example `point=10,11&point=20,22` will be converted to the `points` array (plural):
     * ```json
     * { "points": [[11,10], [22,20]] }
     * ```
     * Note again that also the order changes from `[latitude,longitude]` to `[longitude,latitude]`
     * similar to [GeoJson](http://geojson.org/geojson-spec.html#examples).
     *
     * Example:
     * ```bash
     * curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/route?key=[YOUR_KEY]" -d '{"elevation":false,"points":[[-0.087891,51.534377],[-0.090637,51.467697]],"vehicle":"car"}'
     * ```
     *
    **/
    postRoute(req: operations.PostRouteRequest, config?: AxiosRequestConfig): Promise<operations.PostRouteResponse>;
}
