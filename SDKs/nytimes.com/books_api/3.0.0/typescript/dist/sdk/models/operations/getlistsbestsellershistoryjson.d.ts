import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListsBestSellersHistoryJsonQueryParams extends SpeakeasyBase {
    ageGroup?: string;
    author?: string;
    contributor?: string;
    isbn?: string;
    price?: string;
    publisher?: string;
    title?: string;
}
export declare class GetListsBestSellersHistoryJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns extends SpeakeasyBase {
    isbn10?: string;
    isbn13?: string;
}
export declare class GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory extends SpeakeasyBase {
    asterisk?: number;
    bestsellersDate?: string;
    dagger?: number;
    displayName?: string;
    listName?: string;
    primaryIsbn10?: string;
    primaryIsbn13?: string;
    publishedDate?: string;
    rank?: number;
    ranksLastWeek?: any;
    weeksOnList?: number;
}
export declare class GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews extends SpeakeasyBase {
    articleChapterLink?: string;
    bookReviewLink?: string;
    firstChapterLink?: string;
    sundayReviewLink?: string;
}
export declare class GetListsBestSellersHistoryJson200ApplicationJsonResults extends SpeakeasyBase {
    ageGroup?: string;
    author?: string;
    contributor?: string;
    contributorNote?: string;
    description?: string;
    isbns?: GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns[];
    price?: number;
    publisher?: string;
    ranksHistory?: GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory[];
    reviews?: GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews[];
    title?: string;
}
export declare class GetListsBestSellersHistoryJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GetListsBestSellersHistoryJson200ApplicationJsonResults[];
    status?: string;
}
export declare class GetListsBestSellersHistoryJsonRequest extends SpeakeasyBase {
    queryParams: GetListsBestSellersHistoryJsonQueryParams;
    security: GetListsBestSellersHistoryJsonSecurity;
}
export declare class GetListsBestSellersHistoryJsonResponse extends SpeakeasyBase {
    contentType: string;
    getListsBestSellersHistoryJson200ApplicationJsonObject?: GetListsBestSellersHistoryJson200ApplicationJson;
    statusCode: number;
}
