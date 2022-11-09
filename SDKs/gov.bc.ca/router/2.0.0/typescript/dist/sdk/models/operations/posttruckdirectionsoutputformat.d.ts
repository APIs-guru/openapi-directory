import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostTruckDirectionsOutputFormatOutputFormatEnum {
    Json = "json",
    Kml = "kml",
    Html = "html"
}
export declare class PostTruckDirectionsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostTruckDirectionsOutputFormatOutputFormatEnum;
}
export declare enum PostTruckDirectionsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostTruckDirectionsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostTruckDirectionsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostTruckDirectionsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostTruckDirectionsOutputFormatDistanceUnitEnum;
    outputSrs?: number;
    points: string;
    roundTrip?: boolean;
    routeDescription?: string;
}
export declare class PostTruckDirectionsOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostTruckDirectionsOutputFormatPathParams;
    queryParams: PostTruckDirectionsOutputFormatQueryParams;
}
export declare class PostTruckDirectionsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
