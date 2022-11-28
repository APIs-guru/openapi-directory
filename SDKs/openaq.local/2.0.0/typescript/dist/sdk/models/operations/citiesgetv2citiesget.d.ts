import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CitiesGetV2CitiesGetQueryParams extends SpeakeasyBase {
    city?: string[];
    country?: string[];
    countryId?: string;
    entity?: string;
    limit?: number;
    offset?: number;
    orderBy?: shared.CitiesOrderEnum;
    page?: number;
    sort?: shared.SortEnum;
}
export declare class CitiesGetV2CitiesGetRequest extends SpeakeasyBase {
    queryParams: CitiesGetV2CitiesGetQueryParams;
}
export declare class CitiesGetV2CitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqCitiesResult?: shared.OpenAqCitiesResult;
    statusCode: number;
}
