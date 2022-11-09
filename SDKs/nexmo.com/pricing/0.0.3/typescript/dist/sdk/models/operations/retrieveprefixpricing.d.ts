import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RetrievePrefixPricingPathParams extends SpeakeasyBase {
    type: string;
}
export declare class RetrievePrefixPricingQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    prefix: string;
}
export declare class RetrievePrefixPricingRequest extends SpeakeasyBase {
    pathParams: RetrievePrefixPricingPathParams;
    queryParams: RetrievePrefixPricingQueryParams;
}
export declare class RetrievePrefixPricing400ApplicationJsonInvalidParameters extends SpeakeasyBase {
    message?: string;
    parameter?: string;
}
export declare class RetrievePrefixPricing400ApplicationJson extends SpeakeasyBase {
    errorTitle: string;
    invalidParameters: RetrievePrefixPricing400ApplicationJsonInvalidParameters;
    type: string;
}
export declare class RetrievePrefixPricing401ApplicationJson extends SpeakeasyBase {
    code: string;
    currency: string;
    errorCodeLabel: string;
}
export declare class RetrievePrefixPricingResponse extends SpeakeasyBase {
    contentType: string;
    pricingCountriesResponse?: any;
    statusCode: number;
    retrievePrefixPricing400ApplicationJsonObject?: RetrievePrefixPricing400ApplicationJson;
    retrievePrefixPricing401ApplicationJsonObject?: RetrievePrefixPricing401ApplicationJson;
}
