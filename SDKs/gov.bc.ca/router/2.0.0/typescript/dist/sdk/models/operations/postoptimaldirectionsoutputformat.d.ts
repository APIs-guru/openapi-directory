import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostOptimalDirectionsOutputFormatOutputFormatEnum;
}
export declare enum PostOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostOptimalDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostOptimalDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostOptimalDirectionsOutputFormatPathParams;
    queryParams: PostOptimalDirectionsOutputFormatQueryParams;
}
export declare class PostOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
