import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTruckOptimalRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetTruckOptimalRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetTruckOptimalRouteOutputFormatOutputFormatEnum;
}
export declare enum GetTruckOptimalRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetTruckOptimalRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetTruckOptimalRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetTruckOptimalRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetTruckOptimalRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetTruckOptimalRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetTruckOptimalRouteOutputFormatPathParams;
    queryParams: GetTruckOptimalRouteOutputFormatQueryParams;
}
export declare class GetTruckOptimalRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
