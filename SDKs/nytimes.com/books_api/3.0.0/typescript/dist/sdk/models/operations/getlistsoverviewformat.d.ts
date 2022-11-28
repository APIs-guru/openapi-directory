import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetListsOverviewFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare class GetListsOverviewFormatPathParams extends SpeakeasyBase {
    format: GetListsOverviewFormatFormatEnum;
}
export declare class GetListsOverviewFormatQueryParams extends SpeakeasyBase {
    apiKey?: string;
    publishedDate?: string;
}
export declare class GetListsOverviewFormatSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetListsOverviewFormat200ApplicationJsonResultsListsBooks extends SpeakeasyBase {
    ageGroup?: string;
    author?: string;
    contributor?: string;
    contributorNote?: string;
    createdDate?: string;
    description?: string;
    price?: number;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publisher?: string;
    rank?: number;
    title?: string;
    updatedDate?: string;
}
export declare class GetListsOverviewFormat200ApplicationJsonResultsLists extends SpeakeasyBase {
    books?: GetListsOverviewFormat200ApplicationJsonResultsListsBooks[];
    displayName?: string;
    listId?: number;
    listImage?: string;
    listName?: string;
    updated?: string;
}
export declare class GetListsOverviewFormat200ApplicationJsonResults extends SpeakeasyBase {
    bestsellersDate?: string;
    lists?: GetListsOverviewFormat200ApplicationJsonResultsLists[];
    publishedDate?: string;
}
export declare class GetListsOverviewFormat200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GetListsOverviewFormat200ApplicationJsonResults;
    status?: string;
}
export declare class GetListsOverviewFormatRequest extends SpeakeasyBase {
    pathParams: GetListsOverviewFormatPathParams;
    queryParams: GetListsOverviewFormatQueryParams;
    security: GetListsOverviewFormatSecurity;
}
export declare class GetListsOverviewFormatResponse extends SpeakeasyBase {
    contentType: string;
    getListsOverviewFormat200ApplicationJsonObject?: GetListsOverviewFormat200ApplicationJson;
    statusCode: number;
}
