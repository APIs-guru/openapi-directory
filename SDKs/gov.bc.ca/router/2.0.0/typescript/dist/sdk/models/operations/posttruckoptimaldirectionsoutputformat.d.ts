import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTruckOptimalDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostTruckOptimalDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostTruckOptimalDirectionsOutputFormatOutputFormatEnum;
}
export declare enum PostTruckOptimalDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostTruckOptimalDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostTruckOptimalDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostTruckOptimalDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostTruckOptimalDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostTruckOptimalDirectionsOutputFormatPathParams;
    queryParams: PostTruckOptimalDirectionsOutputFormatQueryParams;
}
export declare class PostTruckOptimalDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
