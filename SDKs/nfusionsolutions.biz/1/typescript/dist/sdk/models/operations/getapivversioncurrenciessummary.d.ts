import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionCurrenciesSummaryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionCurrenciesSummaryQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    pairs: string;
    token: string;
}
export declare class GetApiVVersionCurrenciesSummaryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionCurrenciesSummaryPathParams;
    queryParams: GetApiVVersionCurrenciesSummaryQueryParams;
}
export declare class GetApiVVersionCurrenciesSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
    summaryResponses?: shared.SummaryResponse[];
}
