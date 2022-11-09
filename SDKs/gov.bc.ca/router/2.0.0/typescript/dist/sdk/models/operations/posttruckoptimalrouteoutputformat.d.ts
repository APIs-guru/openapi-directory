import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTruckOptimalRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostTruckOptimalRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostTruckOptimalRouteOutputFormatOutputFormatEnum;
}
export declare enum PostTruckOptimalRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostTruckOptimalRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostTruckOptimalRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostTruckOptimalRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostTruckOptimalRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostTruckOptimalRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostTruckOptimalRouteOutputFormatPathParams;
    queryParams: PostTruckOptimalRouteOutputFormatQueryParams;
}
export declare class PostTruckOptimalRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
