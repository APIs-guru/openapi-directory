import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTruckRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostTruckRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostTruckRouteOutputFormatOutputFormatEnum;
}
export declare enum PostTruckRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostTruckRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostTruckRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostTruckRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostTruckRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostTruckRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostTruckRouteOutputFormatPathParams;
    queryParams: PostTruckRouteOutputFormatQueryParams;
}
export declare class PostTruckRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
