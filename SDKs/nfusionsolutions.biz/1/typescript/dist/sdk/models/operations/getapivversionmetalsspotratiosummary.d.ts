import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSpotRatioSummaryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSpotRatioSummaryQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    pairs: string;
    token: string;
}
export declare class GetApiVVersionMetalsSpotRatioSummaryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSpotRatioSummaryPathParams;
    queryParams: GetApiVVersionMetalsSpotRatioSummaryQueryParams;
}
export declare class GetApiVVersionMetalsSpotRatioSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    summaryResponses?: shared.SummaryResponse[];
}
