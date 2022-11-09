import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTruckRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class GetTruckRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetTruckRouteOutputFormatOutputFormatEnum;
}
export declare enum GetTruckRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetTruckRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetTruckRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetTruckRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetTruckRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class GetTruckRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetTruckRouteOutputFormatPathParams;
    queryParams: GetTruckRouteOutputFormatQueryParams;
}
export declare class GetTruckRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
