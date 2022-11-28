import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsBenchmarkSummaryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsBenchmarkSummaryQueryParams extends SpeakeasyBase {
    currency?: string;
    format?: shared.ResponseFormatEnum;
    metals: string;
    token: string;
    unitofmeasure?: shared.UnitOfMeasureEnum;
}
export declare class GetApiVVersionMetalsBenchmarkSummaryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsBenchmarkSummaryPathParams;
    queryParams: GetApiVVersionMetalsBenchmarkSummaryQueryParams;
}
export declare class GetApiVVersionMetalsBenchmarkSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    summaryResponses?: shared.SummaryResponse[];
}
