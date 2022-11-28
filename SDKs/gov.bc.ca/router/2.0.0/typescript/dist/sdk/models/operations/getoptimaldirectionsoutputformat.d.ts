import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetOptimalDirectionsOutputFormatOutputFormatEnum;
}
export declare enum GetOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetOptimalDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetOptimalDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetOptimalDirectionsOutputFormatPathParams;
    queryParams: GetOptimalDirectionsOutputFormatQueryParams;
}
export declare class GetOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
