import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleGeoPeopleGeoGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    include?: shared.PersonIncludeEnum[];
    lat: number;
    lng: number;
}
export declare class PeopleGeoPeopleGeoGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class PeopleGeoPeopleGeoGetRequest extends SpeakeasyBase {
    queryParams: PeopleGeoPeopleGeoGetQueryParams;
    headers: PeopleGeoPeopleGeoGetHeaders;
}
export declare class PeopleGeoPeopleGeoGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    personList?: shared.PersonList;
    statusCode: number;
}
