import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostRouteOutputFormatOutputFormatEnum;
}
export declare enum PostRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostRouteOutputFormatPathParams;
    queryParams: PostRouteOutputFormatQueryParams;
}
export declare class PostRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
