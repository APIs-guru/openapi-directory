import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CitiesGetv1V1CitiesGetQueryParams extends SpeakeasyBase {
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
export declare class CitiesGetv1V1CitiesGetRequest extends SpeakeasyBase {
    queryParams: CitiesGetv1V1CitiesGetQueryParams;
}
export declare class CitiesGetv1V1CitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAqCitiesResult?: shared.OpenAqCitiesResult;
    statusCode: number;
}
