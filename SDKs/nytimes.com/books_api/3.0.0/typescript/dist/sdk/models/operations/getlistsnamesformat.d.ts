import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetListsNamesFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare class GetListsNamesFormatPathParams extends SpeakeasyBase {
    format: GetListsNamesFormatFormatEnum;
}
export declare class GetListsNamesFormatQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetListsNamesFormatSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetListsNamesFormat200ApplicationJsonResults extends SpeakeasyBase {
    displayName?: string;
    listName?: string;
    listNameEncoded?: string;
    newestPublishedDate?: string;
    oldestPublishedDate?: string;
    updated?: string;
}
export declare class GetListsNamesFormat200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GetListsNamesFormat200ApplicationJsonResults[];
    status?: string;
}
export declare class GetListsNamesFormatRequest extends SpeakeasyBase {
    pathParams: GetListsNamesFormatPathParams;
    queryParams: GetListsNamesFormatQueryParams;
    security: GetListsNamesFormatSecurity;
}
export declare class GetListsNamesFormatResponse extends SpeakeasyBase {
    contentType: string;
    getListsNamesFormat200ApplicationJsonObject?: GetListsNamesFormat200ApplicationJson;
    statusCode: number;
}
