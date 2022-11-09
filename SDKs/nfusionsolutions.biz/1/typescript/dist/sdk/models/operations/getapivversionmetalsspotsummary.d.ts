import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSpotSummaryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSpotSummaryQueryParams extends SpeakeasyBase {
    currency?: string;
    format?: shared.ResponseFormatEnum;
    metals: string;
    token: string;
    unitofmeasure?: shared.UnitOfMeasureEnum;
}
export declare class GetApiVVersionMetalsSpotSummaryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSpotSummaryPathParams;
    queryParams: GetApiVVersionMetalsSpotSummaryQueryParams;
}
export declare class GetApiVVersionMetalsSpotSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    summaryResponses?: shared.SummaryResponse[];
}
