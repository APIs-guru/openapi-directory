import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCountriesCountryCodeRegionsJsonPathParams extends SpeakeasyBase {
    countryCode: string;
}
export declare class GetCountriesCountryCodeRegionsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCountriesCountryCodeRegionsJsonRequest extends SpeakeasyBase {
    pathParams: GetCountriesCountryCodeRegionsJsonPathParams;
    queryParams: GetCountriesCountryCodeRegionsJsonQueryParams;
}
export declare class GetCountriesCountryCodeRegionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    regions?: any[];
    statusCode: number;
}
