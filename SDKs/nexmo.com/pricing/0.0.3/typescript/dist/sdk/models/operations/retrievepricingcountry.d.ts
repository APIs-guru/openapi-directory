import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrievePricingCountryPathParams extends SpeakeasyBase {
    type: string;
}
export declare class RetrievePricingCountryQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    country: string;
}
export declare class RetrievePricingCountry400ApplicationJsonInvalidParameters extends SpeakeasyBase {
    message?: string;
    parameter?: string;
}
export declare class RetrievePricingCountry400ApplicationJson extends SpeakeasyBase {
    errorTitle: string;
    invalidParameters: RetrievePricingCountry400ApplicationJsonInvalidParameters;
    type: string;
}
export declare class RetrievePricingCountry401ApplicationJson extends SpeakeasyBase {
    code: string;
    currency: string;
    errorCodeLabel: string;
}
export declare class RetrievePricingCountryRequest extends SpeakeasyBase {
    pathParams: RetrievePricingCountryPathParams;
    queryParams: RetrievePricingCountryQueryParams;
}
export declare class RetrievePricingCountryResponse extends SpeakeasyBase {
    contentType: string;
    pricingCountryResponse?: any;
    statusCode: number;
    retrievePricingCountry400ApplicationJsonObject?: RetrievePricingCountry400ApplicationJson;
    retrievePricingCountry401ApplicationJsonObject?: RetrievePricingCountry401ApplicationJson;
}
