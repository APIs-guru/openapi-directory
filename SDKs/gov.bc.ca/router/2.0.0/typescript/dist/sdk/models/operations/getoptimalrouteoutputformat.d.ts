import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetOptimalRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetOptimalRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetOptimalRouteOutputFormatOutputFormatEnum;
}
export declare enum GetOptimalRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetOptimalRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetOptimalRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetOptimalRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetOptimalRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetOptimalRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetOptimalRouteOutputFormatPathParams;
    queryParams: GetOptimalRouteOutputFormatQueryParams;
}
export declare class GetOptimalRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
