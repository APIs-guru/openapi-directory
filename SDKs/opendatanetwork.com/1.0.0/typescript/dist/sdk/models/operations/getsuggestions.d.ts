import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSuggestionsTypeEnum {
    Entity = "entity",
    Category = "category",
    Publisher = "publisher",
    Dataset = "dataset",
    Question = "question"
}
export declare class GetSuggestionsPathParams extends SpeakeasyBase {
    type: GetSuggestionsTypeEnum;
}
export declare class GetSuggestionsQueryParams extends SpeakeasyBase {
    appToken?: string;
    limit?: number;
    query: string;
    variableId?: string;
}
export declare class GetSuggestionsHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class GetSuggestionsRequest extends SpeakeasyBase {
    pathParams: GetSuggestionsPathParams;
    queryParams: GetSuggestionsQueryParams;
    headers: GetSuggestionsHeaders;
}
export declare class GetSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
