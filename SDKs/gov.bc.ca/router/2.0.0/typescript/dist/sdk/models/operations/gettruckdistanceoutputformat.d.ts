import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTruckDistanceOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetTruckDistanceOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetTruckDistanceOutputFormatOutputFormatEnum;
}
export declare enum GetTruckDistanceOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetTruckDistanceOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetTruckDistanceOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetTruckDistanceOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetTruckDistanceOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetTruckDistanceOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetTruckDistanceOutputFormatPathParams;
    queryParams: GetTruckDistanceOutputFormatQueryParams;
}
export declare class GetTruckDistanceOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
