import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTruckOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetTruckOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetTruckOptimalDirectionsOutputFormatOutputFormatEnum;
}
export declare enum GetTruckOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetTruckOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetTruckOptimalDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetTruckOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetTruckOptimalDirectionsOutputFormatPathParams;
    queryParams: GetTruckOptimalDirectionsOutputFormatQueryParams;
}
export declare class GetTruckOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
