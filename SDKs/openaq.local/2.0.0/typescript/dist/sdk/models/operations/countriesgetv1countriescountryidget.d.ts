import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CountriesGetV1CountriesCountryIdGetPathParams extends SpeakeasyBase {
    countryId: string;
}
export declare class CountriesGetV1CountriesCountryIdGetQueryParams extends SpeakeasyBase {
    country?: string[];
    limit?: number;
    offset?: number;
    orderBy?: shared.CountriesOrderEnum;
    page?: number;
    sort?: shared.SortEnum;
}
export declare class CountriesGetV1CountriesCountryIdGetRequest extends SpeakeasyBase {
    pathParams: CountriesGetV1CountriesCountryIdGetPathParams;
    queryParams: CountriesGetV1CountriesCountryIdGetQueryParams;
}
export declare class CountriesGetV1CountriesCountryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqCountriesResult?: shared.OpenAqCountriesResult;
    statusCode: number;
}
