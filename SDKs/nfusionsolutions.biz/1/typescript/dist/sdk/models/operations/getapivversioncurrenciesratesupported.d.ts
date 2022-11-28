import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionCurrenciesRateSupportedPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionCurrenciesRateSupportedQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    token: string;
}
export declare class GetApiVVersionCurrenciesRateSupportedRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionCurrenciesRateSupportedPathParams;
    queryParams: GetApiVVersionCurrenciesRateSupportedQueryParams;
}
export declare class GetApiVVersionCurrenciesRateSupportedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getApiVVersionCurrenciesRateSupported200ApplicationJsonStrings?: string[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
