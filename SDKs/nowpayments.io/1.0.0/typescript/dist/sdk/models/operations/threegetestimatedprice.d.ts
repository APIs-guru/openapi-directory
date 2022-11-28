import { SpeakeasyBase } from "../../../internal/utils";
export declare class ThreeGetEstimatedPriceQueryParams extends SpeakeasyBase {
    amount?: string;
    currencyFrom?: string;
    currencyTo?: string;
}
export declare class ThreeGetEstimatedPrice200ApplicationJson extends SpeakeasyBase {
    amountFrom?: number;
    currencyFrom?: string;
    currencyTo?: string;
    estimatedAmount?: number;
}
export declare class ThreeGetEstimatedPriceRequest extends SpeakeasyBase {
    queryParams: ThreeGetEstimatedPriceQueryParams;
}
export declare class ThreeGetEstimatedPriceResponse extends SpeakeasyBase {
    threeGetEstimatedPrice200ApplicationJsonObject?: ThreeGetEstimatedPrice200ApplicationJson;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
