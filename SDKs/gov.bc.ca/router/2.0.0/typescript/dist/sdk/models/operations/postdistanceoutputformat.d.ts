import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDistanceOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostDistanceOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostDistanceOutputFormatOutputFormatEnum;
}
export declare enum PostDistanceOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostDistanceOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostDistanceOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostDistanceOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostDistanceOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostDistanceOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostDistanceOutputFormatPathParams;
    queryParams: PostDistanceOutputFormatQueryParams;
}
export declare class PostDistanceOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
