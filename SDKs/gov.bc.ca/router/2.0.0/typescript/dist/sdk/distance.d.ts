import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Distance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points
     *
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    getDistanceBetweenPairsOutputFormat(req: operations.GetDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDistanceBetweenPairsOutputFormatResponse>;
    /**
     * getDistanceOutputFormat - Get distance and travel time between two geographic points
     *
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    getDistanceOutputFormat(req: operations.GetDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDistanceOutputFormatResponse>;
    /**
     * getTruckDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points for a commercial vehicle
     *
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    getTruckDistanceBetweenPairsOutputFormat(req: operations.GetTruckDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDistanceBetweenPairsOutputFormatResponse>;
    /**
     * getTruckDistanceOutputFormat - Get distance and travel time between two geographic points for a commercial vehicle
     *
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    getTruckDistanceOutputFormat(req: operations.GetTruckDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDistanceOutputFormatResponse>;
    /**
     * postDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points
     *
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    postDistanceBetweenPairsOutputFormat(req: operations.PostDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDistanceBetweenPairsOutputFormatResponse>;
    /**
     * postDistanceOutputFormat - Get distance and travel time between two geographic points
     *
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    postDistanceOutputFormat(req: operations.PostDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDistanceOutputFormatResponse>;
    /**
     * postTruckDistanceBetweenPairsOutputFormat - Get distance and travel time between each pair of geographic points
     *
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    postTruckDistanceBetweenPairsOutputFormat(req: operations.PostTruckDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDistanceBetweenPairsOutputFormatResponse>;
    /**
     * postTruckDistanceOutputFormat - Get distance and travel time between two geographic points
     *
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    postTruckDistanceOutputFormat(req: operations.PostTruckDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDistanceOutputFormatResponse>;
}
