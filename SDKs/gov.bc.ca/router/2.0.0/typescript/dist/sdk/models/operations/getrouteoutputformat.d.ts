import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetRouteOutputFormatOutputFormatEnum;
}
export declare enum GetRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetRouteOutputFormatPathParams;
    queryParams: GetRouteOutputFormatQueryParams;
}
export declare class GetRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
