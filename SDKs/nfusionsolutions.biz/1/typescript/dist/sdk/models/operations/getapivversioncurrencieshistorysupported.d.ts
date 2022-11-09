import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionCurrenciesHistorySupportedPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionCurrenciesHistorySupportedQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    token: string;
}
export declare class GetApiVVersionCurrenciesHistorySupportedRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionCurrenciesHistorySupportedPathParams;
    queryParams: GetApiVVersionCurrenciesHistorySupportedQueryParams;
}
export declare class GetApiVVersionCurrenciesHistorySupportedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getApiVVersionCurrenciesHistorySupported200ApplicationJsonStrings?: string[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
