import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionCurrenciesRatePathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionCurrenciesRateQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    pairs: string;
    token: string;
}
export declare class GetApiVVersionCurrenciesRateRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionCurrenciesRatePathParams;
    queryParams: GetApiVVersionCurrenciesRateQueryParams;
}
export declare class GetApiVVersionCurrenciesRateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    rateResponses?: shared.RateResponse[];
    statusCode: number;
}
