import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCountriesCountryCodeJsonPathParams extends SpeakeasyBase {
    countryCode: string;
}
export declare class GetCountriesCountryCodeJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCountriesCountryCodeJsonRequest extends SpeakeasyBase {
    pathParams: GetCountriesCountryCodeJsonPathParams;
    queryParams: GetCountriesCountryCodeJsonQueryParams;
}
export declare class GetCountriesCountryCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    country?: any;
    notFound?: any;
    statusCode: number;
}
