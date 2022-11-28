import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetDirectionsOutputFormatOutputFormatEnum;
}
export declare enum GetDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetDirectionsOutputFormatPathParams;
    queryParams: GetDirectionsOutputFormatQueryParams;
}
export declare class GetDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
