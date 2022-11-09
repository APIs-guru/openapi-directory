import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}
export declare class PostDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: PostDistanceBetweenPairsOutputFormatOutputFormatEnum;
}
export declare enum PostDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum PostDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class PostDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: PostDistanceBetweenPairsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: PostDistanceBetweenPairsOutputFormatDistanceUnitEnum;
    fromPoints: string;
    maxPairs?: number;
    outputSrs?: number;
    routeDescription?: string;
    toPoints: string;
}
export declare class PostDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
    pathParams: PostDistanceBetweenPairsOutputFormatPathParams;
    queryParams: PostDistanceBetweenPairsOutputFormatQueryParams;
}
export declare class PostDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
