import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Route {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOptimalRouteOutputFormat - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time
    **/
    getOptimalRouteOutputFormat(req: operations.GetOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOptimalRouteOutputFormatResponse>;
    /**
     * getRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
    **/
    getRouteOutputFormat(req: operations.GetRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteOutputFormatResponse>;
    /**
     * getTruckOptimalRouteOutputFormat - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.
    **/
    getTruckOptimalRouteOutputFormat(req: operations.GetTruckOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckOptimalRouteOutputFormatResponse>;
    /**
     * getTruckRouteOutputFormat - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.
    **/
    getTruckRouteOutputFormat(req: operations.GetTruckRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckRouteOutputFormatResponse>;
    /**
     * postOptimalRouteOutputFormat - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
    **/
    postOptimalRouteOutputFormat(req: operations.PostOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostOptimalRouteOutputFormatResponse>;
    /**
     * postRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
    **/
    postRouteOutputFormat(req: operations.PostRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostRouteOutputFormatResponse>;
    /**
     * postTruckOptimalRouteOutputFormat - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
    **/
    postTruckOptimalRouteOutputFormat(req: operations.PostTruckOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckOptimalRouteOutputFormatResponse>;
    /**
     * postTruckRouteOutputFormat - Get the path, distance and travel time between a series of geographic points
     *
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
    **/
    postTruckRouteOutputFormat(req: operations.PostTruckRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckRouteOutputFormatResponse>;
}
