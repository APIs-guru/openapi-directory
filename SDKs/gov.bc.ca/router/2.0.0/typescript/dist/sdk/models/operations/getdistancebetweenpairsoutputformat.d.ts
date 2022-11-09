import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}
export declare class GetDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetDistanceBetweenPairsOutputFormatOutputFormatEnum;
}
export declare enum GetDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetDistanceBetweenPairsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetDistanceBetweenPairsOutputFormatDistanceUnitEnum;
    fromPoints: string;
    maxPairs?: number;
    outputSrs?: number;
    routeDescription?: string;
    toPoints: string;
}
export declare class GetDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetDistanceBetweenPairsOutputFormatPathParams;
    queryParams: GetDistanceBetweenPairsOutputFormatQueryParams;
}
export declare class GetDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
