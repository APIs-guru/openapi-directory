import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTruckDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetTruckDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetTruckDirectionsOutputFormatOutputFormatEnum;
}
export declare enum GetTruckDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetTruckDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetTruckDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetTruckDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetTruckDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetTruckDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetTruckDirectionsOutputFormatPathParams;
    queryParams: GetTruckDirectionsOutputFormatQueryParams;
}
export declare class GetTruckDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
