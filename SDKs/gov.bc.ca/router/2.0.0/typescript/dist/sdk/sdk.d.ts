import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
    **/
    GetDirectionsOutputFormat(req: operations.GetDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectionsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    GetDistanceBetweenPairsOutputFormat(req: operations.GetDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDistanceBetweenPairsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    GetDistanceOutputFormat(req: operations.GetDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDistanceOutputFormatResponse>;
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time
    **/
    GetOptimalDirectionsOutputFormat(req: operations.GetOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOptimalDirectionsOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time
    **/
    GetOptimalRouteOutputFormat(req: operations.GetOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOptimalRouteOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
    **/
    GetRouteOutputFormat(req: operations.GetRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteOutputFormatResponse>;
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle
    **/
    GetTruckDirectionsOutputFormat(req: operations.GetTruckDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDirectionsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    GetTruckDistanceBetweenPairsOutputFormat(req: operations.GetTruckDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDistanceBetweenPairsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    GetTruckDistanceOutputFormat(req: operations.GetTruckDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDistanceOutputFormatResponse>;
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.
    **/
    GetTruckOptimalDirectionsOutputFormat(req: operations.GetTruckOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckOptimalDirectionsOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.
    **/
    GetTruckOptimalRouteOutputFormat(req: operations.GetTruckOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckOptimalRouteOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.
    **/
    GetTruckRouteOutputFormat(req: operations.GetTruckRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckRouteOutputFormatResponse>;
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
    **/
    PostDirectionsOutputFormat(req: operations.PostDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDirectionsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    PostDistanceBetweenPairsOutputFormat(req: operations.PostDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDistanceBetweenPairsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    PostDistanceOutputFormat(req: operations.PostDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDistanceOutputFormatResponse>;
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
    **/
    PostOptimalDirectionsOutputFormat(req: operations.PostOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostOptimalDirectionsOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
    **/
    PostOptimalRouteOutputFormat(req: operations.PostOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostOptimalRouteOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
    **/
    PostRouteOutputFormat(req: operations.PostRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostRouteOutputFormatResponse>;
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
    **/
    PostTruckDirectionsOutputFormat(req: operations.PostTruckDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDirectionsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
    **/
    PostTruckDistanceBetweenPairsOutputFormat(req: operations.PostTruckDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDistanceBetweenPairsOutputFormatResponse>;
    /**
     * Represents the distance and time of the shortest or fastest path between given start and end points.
    **/
    PostTruckDistanceOutputFormat(req: operations.PostTruckDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDistanceOutputFormatResponse>;
    /**
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
    **/
    PostTruckOptimalDirectionsOutputFormat(req: operations.PostTruckOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckOptimalDirectionsOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
    **/
    PostTruckOptimalRouteOutputFormat(req: operations.PostTruckOptimalRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckOptimalRouteOutputFormatResponse>;
    /**
     * Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
    **/
    PostTruckRouteOutputFormat(req: operations.PostTruckRouteOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckRouteOutputFormatResponse>;
}
export {};
