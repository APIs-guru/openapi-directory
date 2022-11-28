import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetArticlesearchJsonSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetArticlesearchJsonQueryParams extends SpeakeasyBase {
    beginDate?: string;
    endDate?: string;
    facetField?: string;
    facetFilter?: boolean;
    fl?: string;
    fq?: string;
    hl?: boolean;
    page?: number;
    q?: string;
    sort?: GetArticlesearchJsonSortEnum;
}
export declare class GetArticlesearchJson200ApplicationJsonResponseMeta extends SpeakeasyBase {
    hits?: number;
    offset?: number;
    time?: number;
}
export declare class GetArticlesearchJson200ApplicationJsonResponse extends SpeakeasyBase {
    docs?: shared.Doc[];
    meta?: GetArticlesearchJson200ApplicationJsonResponseMeta;
}
export declare class GetArticlesearchJson200ApplicationJson extends SpeakeasyBase {
    response?: GetArticlesearchJson200ApplicationJsonResponse;
}
export declare class GetArticlesearchJsonRequest extends SpeakeasyBase {
    queryParams: GetArticlesearchJsonQueryParams;
}
export declare class GetArticlesearchJsonResponse extends SpeakeasyBase {
    contentType: string;
    getArticlesearchJson200ApplicationJsonObject?: GetArticlesearchJson200ApplicationJson;
    statusCode: number;
}
