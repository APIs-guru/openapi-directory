import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSuggestionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetSuggestionsQueryParams extends SpeakeasyBase {
    enableTotalRecordCount?: boolean;
    limit?: number;
    mediaType?: string[];
    startIndex?: number;
    type?: string[];
}
export declare class GetSuggestionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetSuggestionsRequest extends SpeakeasyBase {
    pathParams: GetSuggestionsPathParams;
    queryParams: GetSuggestionsQueryParams;
    security: GetSuggestionsSecurity;
}
export declare class GetSuggestionsResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
