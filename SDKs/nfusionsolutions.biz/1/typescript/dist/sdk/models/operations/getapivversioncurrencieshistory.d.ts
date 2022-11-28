import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionCurrenciesHistoryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionCurrenciesHistoryQueryParams extends SpeakeasyBase {
    end?: Date;
    format?: shared.ResponseFormatEnum;
    interval?: string;
    pairs: string;
    start: Date;
    token: string;
}
export declare class GetApiVVersionCurrenciesHistoryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionCurrenciesHistoryPathParams;
    queryParams: GetApiVVersionCurrenciesHistoryQueryParams;
}
export declare class GetApiVVersionCurrenciesHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
