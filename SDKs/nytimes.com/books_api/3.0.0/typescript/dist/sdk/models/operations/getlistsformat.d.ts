import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetListsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare class GetListsFormatPathParams extends SpeakeasyBase {
    format: GetListsFormatFormatEnum;
}
export declare enum GetListsFormatSortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class GetListsFormatQueryParams extends SpeakeasyBase {
    bestsellersDate?: Date;
    date?: string;
    isbn?: string;
    list?: string;
    offset?: number;
    publishedDate?: string;
    rank?: number;
    rankLastWeek?: number;
    sortOrder?: GetListsFormatSortOrderEnum;
    weeksOnList?: number;
}
export declare class GetListsFormatSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetListsFormat200ApplicationJsonResultsBookDetails extends SpeakeasyBase {
    ageGroup?: string;
    author?: string;
    contributor?: string;
    contributorNote?: string;
    description?: string;
    price?: number;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publisher?: string;
    title?: string;
}
export declare class GetListsFormat200ApplicationJsonResultsIsbns extends SpeakeasyBase {
    isbn10?: string;
    isbn13?: string;
}
export declare class GetListsFormat200ApplicationJsonResultsReviews extends SpeakeasyBase {
    articleChapterLink?: string;
    bookReviewLink?: string;
    firstChapterLink?: string;
    sundayReviewLink?: string;
}
export declare class GetListsFormat200ApplicationJsonResults extends SpeakeasyBase {
    amazonProductUrl?: string;
    asterisk?: number;
    bestsellersDate?: string;
    bookDetails?: GetListsFormat200ApplicationJsonResultsBookDetails[];
    dagger?: number;
    displayName?: string;
    isbns?: GetListsFormat200ApplicationJsonResultsIsbns[];
    listName?: string;
    publishedDate?: string;
    rank?: number;
    rankLastWeek?: number;
    reviews?: GetListsFormat200ApplicationJsonResultsReviews[];
    weeksOnList?: number;
}
export declare class GetListsFormat200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    lastModified?: string;
    numResults?: number;
    results?: GetListsFormat200ApplicationJsonResults[];
    status?: string;
}
export declare class GetListsFormatRequest extends SpeakeasyBase {
    pathParams: GetListsFormatPathParams;
    queryParams: GetListsFormatQueryParams;
    security: GetListsFormatSecurity;
}
export declare class GetListsFormatResponse extends SpeakeasyBase {
    contentType: string;
    getListsFormat200ApplicationJsonObject?: GetListsFormat200ApplicationJson;
    statusCode: number;
}
