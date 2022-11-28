import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetReviewsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}
export declare class GetReviewsFormatPathParams extends SpeakeasyBase {
    format: GetReviewsFormatFormatEnum;
}
export declare class GetReviewsFormatQueryParams extends SpeakeasyBase {
    apiKey?: string;
    author?: string;
    isbn?: number;
    title?: string;
}
export declare class GetReviewsFormatSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetReviewsFormat200ApplicationJsonResults extends SpeakeasyBase {
    bookAuthor?: string;
    bookTitle?: string;
    byline?: string;
    isbn13?: string[];
    publicationDt?: string;
    summary?: string;
    url?: string;
}
export declare class GetReviewsFormat200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: GetReviewsFormat200ApplicationJsonResults[];
    status?: string;
}
export declare class GetReviewsFormatRequest extends SpeakeasyBase {
    pathParams: GetReviewsFormatPathParams;
    queryParams: GetReviewsFormatQueryParams;
    security: GetReviewsFormatSecurity;
}
export declare class GetReviewsFormatResponse extends SpeakeasyBase {
    contentType: string;
    getReviewsFormat200ApplicationJsonObject?: GetReviewsFormat200ApplicationJson;
    statusCode: number;
}
