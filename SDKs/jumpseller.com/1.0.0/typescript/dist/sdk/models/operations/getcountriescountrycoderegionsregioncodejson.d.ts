import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCountriesCountryCodeRegionsRegionCodeJsonPathParams extends SpeakeasyBase {
    countryCode: string;
    regionCode: string;
}
export declare class GetCountriesCountryCodeRegionsRegionCodeJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCountriesCountryCodeRegionsRegionCodeJsonRequest extends SpeakeasyBase {
    pathParams: GetCountriesCountryCodeRegionsRegionCodeJsonPathParams;
    queryParams: GetCountriesCountryCodeRegionsRegionCodeJsonQueryParams;
}
export declare class GetCountriesCountryCodeRegionsRegionCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    region?: any;
    statusCode: number;
}
