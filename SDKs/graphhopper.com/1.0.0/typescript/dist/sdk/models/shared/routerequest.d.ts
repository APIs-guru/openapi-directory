import { SpeakeasyBase } from "../../../internal/utils";
import { VehicleProfileIdEnum } from "./vehicleprofileidenum";
export declare enum RouteRequestAlgorithmEnum {
    RoundTrip = "round_trip",
    AlternativeRoute = "alternative_route"
}
export declare enum RouteRequestCurbsidesEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare class RouteRequest extends SpeakeasyBase {
    algorithm?: RouteRequestAlgorithmEnum;
    alternativeRouteMaxPaths?: number;
    alternativeRouteMaxShareFactor?: number;
    alternativeRouteMaxWeightFactor?: number;
    avoid?: string;
    blockArea?: string;
    calcPoints?: boolean;
    chDisable?: boolean;
    curbsides?: RouteRequestCurbsidesEnum[];
    debug?: boolean;
    details?: string[];
    elevation?: boolean;
    headingPenalty?: number;
    headings?: number[];
    instructions?: boolean;
    locale?: string;
    optimize?: string;
    passThrough?: boolean;
    pointHints?: string[];
    points?: number[][];
    pointsEncoded?: boolean;
    roundTripDistance?: number;
    roundTripSeed?: number;
    snapPreventions?: string[];
    vehicle?: VehicleProfileIdEnum;
    weighting?: string;
}
