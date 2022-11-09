import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CountriesGetV2CountriesGetQueryParams extends SpeakeasyBase {
    country?: string[];
    countryId?: string;
    limit?: number;
    offset?: number;
    orderBy?: shared.CountriesOrderEnum;
    page?: number;
    sort?: shared.SortEnum;
}
export declare class CountriesGetV2CountriesGetRequest extends SpeakeasyBase {
    queryParams: CountriesGetV2CountriesGetQueryParams;
}
export declare class CountriesGetV2CountriesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqCountriesResult?: shared.OpenAqCountriesResult;
    statusCode: number;
}
