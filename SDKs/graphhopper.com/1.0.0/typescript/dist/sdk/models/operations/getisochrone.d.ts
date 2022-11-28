import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetIsochroneWeightingEnum {
    Fastest = "fastest",
    Shortest = "shortest"
}
export declare class GetIsochroneQueryParams extends SpeakeasyBase {
    buckets?: number;
    distanceLimit?: number;
    point: string;
    reverseFlow?: boolean;
    timeLimit?: number;
    vehicle?: shared.VehicleProfileIdEnum;
    weighting?: GetIsochroneWeightingEnum;
}
export declare class GetIsochroneRequest extends SpeakeasyBase {
    queryParams: GetIsochroneQueryParams;
}
export declare class GetIsochroneResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    isochroneResponse?: shared.IsochroneResponse;
    statusCode: number;
}
