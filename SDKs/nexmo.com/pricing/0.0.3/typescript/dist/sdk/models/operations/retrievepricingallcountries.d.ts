import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrievePricingAllCountriesPathParams extends SpeakeasyBase {
    type: string;
}
export declare class RetrievePricingAllCountriesQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class RetrievePricingAllCountries400ApplicationJsonInvalidParameters extends SpeakeasyBase {
    message?: string;
    parameter?: string;
}
export declare class RetrievePricingAllCountries400ApplicationJson extends SpeakeasyBase {
    errorTitle: string;
    invalidParameters: RetrievePricingAllCountries400ApplicationJsonInvalidParameters;
    type: string;
}
export declare class RetrievePricingAllCountries401ApplicationJson extends SpeakeasyBase {
    code: string;
    currency: string;
    errorCodeLabel: string;
}
export declare class RetrievePricingAllCountriesRequest extends SpeakeasyBase {
    pathParams: RetrievePricingAllCountriesPathParams;
    queryParams: RetrievePricingAllCountriesQueryParams;
}
export declare class RetrievePricingAllCountriesResponse extends SpeakeasyBase {
    contentType: string;
    pricingCountriesResponse?: any;
    statusCode: number;
    retrievePricingAllCountries400ApplicationJsonObject?: RetrievePricingAllCountries400ApplicationJson;
    retrievePricingAllCountries401ApplicationJsonObject?: RetrievePricingAllCountries401ApplicationJson;
}
