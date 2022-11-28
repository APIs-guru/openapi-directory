import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNewsArticlesPathParams extends SpeakeasyBase {
    billId: number;
}
export declare class GetNewsArticlesQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetNewsArticlesRequest extends SpeakeasyBase {
    pathParams: GetNewsArticlesPathParams;
    queryParams: GetNewsArticlesQueryParams;
}
export declare class GetNewsArticlesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    newsArticlesSummarySearchResult?: shared.NewsArticlesSummarySearchResult;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
