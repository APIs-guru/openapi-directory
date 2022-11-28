import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRouteAlgorithmEnum {
    RoundTrip = "round_trip",
    AlternativeRoute = "alternative_route"
}
export declare enum GetRouteCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare class GetRouteQueryParams extends SpeakeasyBase {
    algorithm?: GetRouteAlgorithmEnum;
    alternativeRouteMaxPaths?: number;
    alternativeRouteMaxShareFactor?: number;
    alternativeRouteMaxWeightFactor?: number;
    avoid?: string;
    blockArea?: string;
    calcPoints?: boolean;
    chDisable?: boolean;
    curbside?: GetRouteCurbsideEnum[];
    debug?: boolean;
    details?: string[];
    elevation?: boolean;
    heading?: number[];
    headingPenalty?: number;
    instructions?: boolean;
    locale?: string;
    optimize?: string;
    passThrough?: boolean;
    point: string[];
    pointHint?: string[];
    pointsEncoded?: boolean;
    roundTripDistance?: number;
    roundTripSeed?: number;
    snapPrevention?: string[];
    turnCosts?: boolean;
    vehicle?: shared.VehicleProfileIdEnum;
    weighting?: string;
}
export declare class GetRouteRequest extends SpeakeasyBase {
    queryParams: GetRouteQueryParams;
}
export declare class GetRouteResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    headers: Map<string, string[]>;
    routeResponse?: shared.RouteResponse;
    statusCode: number;
}
