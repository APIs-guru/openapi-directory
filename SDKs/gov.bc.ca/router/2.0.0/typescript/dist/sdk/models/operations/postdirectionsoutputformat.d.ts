import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostDirectionsOutputFormatOutputFormatEnum;
}
export declare enum PostDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostDirectionsOutputFormatPathParams;
    queryParams: PostDirectionsOutputFormatQueryParams;
}
export declare class PostDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
