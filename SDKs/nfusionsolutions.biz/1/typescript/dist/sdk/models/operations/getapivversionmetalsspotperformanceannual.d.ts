import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSpotPerformanceAnnualPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSpotPerformanceAnnualQueryParams extends SpeakeasyBase {
    currency?: string;
    format?: shared.ResponseFormatEnum;
    metals: string;
    token: string;
    unitofmeasure?: shared.UnitOfMeasureEnum;
    years?: number;
}
export declare class GetApiVVersionMetalsSpotPerformanceAnnualRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSpotPerformanceAnnualPathParams;
    queryParams: GetApiVVersionMetalsSpotPerformanceAnnualQueryParams;
}
export declare class GetApiVVersionMetalsSpotPerformanceAnnualResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
