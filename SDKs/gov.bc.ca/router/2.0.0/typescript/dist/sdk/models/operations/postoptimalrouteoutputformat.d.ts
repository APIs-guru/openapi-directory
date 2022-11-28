import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostOptimalRouteOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostOptimalRouteOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostOptimalRouteOutputFormatOutputFormatEnum;
}
export declare enum PostOptimalRouteOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostOptimalRouteOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostOptimalRouteOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostOptimalRouteOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostOptimalRouteOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostOptimalRouteOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostOptimalRouteOutputFormatPathParams;
    queryParams: PostOptimalRouteOutputFormatQueryParams;
}
export declare class PostOptimalRouteOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
