import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSpotPerformancePathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSpotPerformanceQueryParams extends SpeakeasyBase {
    currency?: string;
    format?: shared.ResponseFormatEnum;
    metals: string;
    token: string;
    unitofmeasure?: shared.UnitOfMeasureEnum;
}
export declare class GetApiVVersionMetalsSpotPerformanceRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSpotPerformancePathParams;
    queryParams: GetApiVVersionMetalsSpotPerformanceQueryParams;
}
export declare class GetApiVVersionMetalsSpotPerformanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
