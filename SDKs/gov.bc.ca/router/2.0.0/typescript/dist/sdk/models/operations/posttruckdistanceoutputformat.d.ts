import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTruckDistanceOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostTruckDistanceOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostTruckDistanceOutputFormatOutputFormatEnum;
}
export declare enum PostTruckDistanceOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostTruckDistanceOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostTruckDistanceOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostTruckDistanceOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostTruckDistanceOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostTruckDistanceOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostTruckDistanceOutputFormatPathParams;
    queryParams: PostTruckDistanceOutputFormatQueryParams;
}
export declare class PostTruckDistanceOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
