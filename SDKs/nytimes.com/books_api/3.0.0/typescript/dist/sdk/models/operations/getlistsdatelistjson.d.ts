import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListsDateListJsonPathParams extends SpeakeasyBase {
    date: string;
    list: string;
}
export declare enum GetListsDateListJsonSortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class GetListsDateListJsonQueryParams extends SpeakeasyBase {
    bestsellersDate?: string;
    isbn?: number;
    listName?: string;
    offset?: number;
    publishedDate?: Date;
    rank?: string;
    rankLastWeek?: number;
    sortOrder?: GetListsDateListJsonSortOrderEnum;
    weeksOnList?: number;
}
export declare class GetListsDateListJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetListsDateListJson200ApplicationJsonResultsBooksIsbns extends SpeakeasyBase {
    isbn10?: string;
    isbn13?: string;
}
export declare class GetListsDateListJson200ApplicationJsonResultsBooks extends SpeakeasyBase {
    ageGroup?: string;
    amazonProductUrl?: string;
    articleChapterLink?: string;
    asterisk?: number;
    author?: string;
    bookImage?: string;
    bookReviewLink?: string;
    contributor?: string;
    contributorNote?: string;
    dagger?: number;
    description?: string;
    firstChapterLink?: string;
    isbns?: GetListsDateListJson200ApplicationJsonResultsBooksIsbns[];
    price?: number;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publisher?: string;
    rank?: number;
    rankLastWeek?: number;
    sundayReviewLink?: string;
    title?: string;
    weeksOnList?: number;
}
export declare class GetListsDateListJson200ApplicationJsonResults extends SpeakeasyBase {
    bestsellersDate?: string;
    books?: GetListsDateListJson200ApplicationJsonResultsBooks[];
    corrections?: Map<string, any>[];
    displayName?: string;
    listName?: string;
    normalListEndsAt?: number;
    publishedDate?: string;
    updated?: string;
}
export declare class GetListsDateListJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    lastModified?: string;
    numResults?: number;
    results?: GetListsDateListJson200ApplicationJsonResults;
    status?: string;
}
export declare class GetListsDateListJsonRequest extends SpeakeasyBase {
    pathParams: GetListsDateListJsonPathParams;
    queryParams: GetListsDateListJsonQueryParams;
    security: GetListsDateListJsonSecurity;
}
export declare class GetListsDateListJsonResponse extends SpeakeasyBase {
    contentType: string;
    getListsDateListJson200ApplicationJsonObject?: GetListsDateListJson200ApplicationJson;
    statusCode: number;
}
