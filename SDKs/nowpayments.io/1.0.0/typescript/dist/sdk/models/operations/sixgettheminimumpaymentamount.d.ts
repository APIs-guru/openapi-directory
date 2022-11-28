import { SpeakeasyBase } from "../../../internal/utils";
export declare class SixGetTheMinimumPaymentAmountQueryParams extends SpeakeasyBase {
    currencyFrom?: string;
    currencyTo?: string;
}
export declare class SixGetTheMinimumPaymentAmount200ApplicationJson extends SpeakeasyBase {
    currencyFrom?: string;
    currencyTo?: string;
    minAmount?: number;
}
export declare class SixGetTheMinimumPaymentAmountRequest extends SpeakeasyBase {
    queryParams: SixGetTheMinimumPaymentAmountQueryParams;
}
export declare class SixGetTheMinimumPaymentAmountResponse extends SpeakeasyBase {
    sixGetTheMinimumPaymentAmount200ApplicationJsonObject?: SixGetTheMinimumPaymentAmount200ApplicationJson;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
