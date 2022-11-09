import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDistanceOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetDistanceOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetDistanceOutputFormatOutputFormatEnum;
}
export declare enum GetDistanceOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetDistanceOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetDistanceOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetDistanceOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetDistanceOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetDistanceOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetDistanceOutputFormatPathParams;
    queryParams: GetDistanceOutputFormatQueryParams;
}
export declare class GetDistanceOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
