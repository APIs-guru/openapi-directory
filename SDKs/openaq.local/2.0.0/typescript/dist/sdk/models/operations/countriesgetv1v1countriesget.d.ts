import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CountriesGetv1V1CountriesGetQueryParams extends SpeakeasyBase {
    country?: string[];
    countryId?: string;
    limit?: number;
    offset?: number;
    orderBy?: shared.CountriesOrderEnum;
    page?: number;
    sort?: shared.SortEnum;
}
export declare class CountriesGetv1V1CountriesGetRequest extends SpeakeasyBase {
    queryParams: CountriesGetv1V1CountriesGetQueryParams;
}
export declare class CountriesGetv1V1CountriesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqCountriesResult?: shared.OpenAqCountriesResult;
    statusCode: number;
}
