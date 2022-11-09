import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReferencesCountriesByCountryCodeGetPathParams extends SpeakeasyBase {
    countryCode: string;
}
export declare class ReferencesCountriesByCountryCodeGetQueryParams extends SpeakeasyBase {
    lang?: string;
    limit?: string;
    offset?: string;
}
export declare class ReferencesCountriesByCountryCodeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReferencesCountriesByCountryCodeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class ReferencesCountriesByCountryCodeGetRequest extends SpeakeasyBase {
    pathParams: ReferencesCountriesByCountryCodeGetPathParams;
    queryParams: ReferencesCountriesByCountryCodeGetQueryParams;
    headers: ReferencesCountriesByCountryCodeGetHeaders;
    security: ReferencesCountriesByCountryCodeGetSecurity;
}
export declare class ReferencesCountriesByCountryCodeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesCountriesByCountryCodeGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
