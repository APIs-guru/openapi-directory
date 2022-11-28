import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}
export declare class PostTruckDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
}
export declare enum PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostTruckDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
    fromPoints: string;
    maxPairs?: number;
    outputSrs?: number;
    routeDescription?: string;
    toPoints: string;
}
export declare class PostTruckDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostTruckDistanceBetweenPairsOutputFormatPathParams;
    queryParams: PostTruckDistanceBetweenPairsOutputFormatQueryParams;
}
export declare class PostTruckDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
