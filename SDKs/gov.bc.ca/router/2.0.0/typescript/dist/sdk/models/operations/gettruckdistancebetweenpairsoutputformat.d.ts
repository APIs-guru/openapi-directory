import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum {
    Json = "json",
    Html = "html"
}
export declare class GetTruckDistanceBetweenPairsOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnum;
}
export declare enum GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum {
    Shortest = "shortest",
    Fastest = "fastest"
}
export declare enum GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum {
    Km = "km",
    Mi = "mi"
}
export declare class GetTruckDistanceBetweenPairsOutputFormatQueryParams extends SpeakeasyBase {
    correctSide?: boolean;
    criteria?: GetTruckDistanceBetweenPairsOutputFormatCriteriaEnum;
    departure?: Date;
    disable?: string;
    distanceUnit?: GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnum;
    fromPoints: string;
    maxPairs?: number;
    outputSrs?: number;
    routeDescription?: string;
    toPoints: string;
}
export declare class GetTruckDistanceBetweenPairsOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetTruckDistanceBetweenPairsOutputFormatPathParams;
    queryParams: GetTruckDistanceBetweenPairsOutputFormatQueryParams;
}
export declare class GetTruckDistanceBetweenPairsOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
