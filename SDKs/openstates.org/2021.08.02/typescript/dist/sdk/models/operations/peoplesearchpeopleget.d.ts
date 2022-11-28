import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeopleSearchPeopleGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    district?: string;
    id?: string[];
    include?: shared.PersonIncludeEnum[];
    jurisdiction?: string;
    name?: string;
    orgClassification?: shared.OrgClassificationEnum;
    page?: number;
    perPage?: number;
}
export declare class PeopleSearchPeopleGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class PeopleSearchPeopleGetRequest extends SpeakeasyBase {
    queryParams: PeopleSearchPeopleGetQueryParams;
    headers: PeopleSearchPeopleGetHeaders;
}
export declare class PeopleSearchPeopleGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    personList?: shared.PersonList;
    statusCode: number;
}
