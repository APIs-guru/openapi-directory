import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CountriesGetV2CountriesCountryIdGetPathParams extends SpeakeasyBase {
    countryId: string;
}
export declare class CountriesGetV2CountriesCountryIdGetQueryParams extends SpeakeasyBase {
    country?: string[];
    limit?: number;
    offset?: number;
    orderBy?: shared.CountriesOrderEnum;
    page?: number;
    sort?: shared.SortEnum;
}
export declare class CountriesGetV2CountriesCountryIdGetRequest extends SpeakeasyBase {
    pathParams: CountriesGetV2CountriesCountryIdGetPathParams;
    queryParams: CountriesGetV2CountriesCountryIdGetQueryParams;
}
export declare class CountriesGetV2CountriesCountryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqCountriesResult?: shared.OpenAqCountriesResult;
    statusCode: number;
}
