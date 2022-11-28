import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSearchJsonFieldsEnum {
    All = "all",
    Pages = "pages",
    TickerSymbol = "ticker_symbol",
    Links = "links",
    Taxonomy = "taxonomy",
    Combinations = "combinations",
    Geocodes = "geocodes",
    ArticleList = "article_list",
    ScopeNotes = "scope_notes",
    SearchApiQuery = "search_api_query"
}
export declare class GetSearchJsonQueryParams extends SpeakeasyBase {
    fields?: GetSearchJsonFieldsEnum;
    offset?: number;
    query: string;
}
export declare class GetSearchJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.ConceptRelation[];
    status?: string;
}
export declare class GetSearchJsonRequest extends SpeakeasyBase {
    queryParams: GetSearchJsonQueryParams;
}
export declare class GetSearchJsonResponse extends SpeakeasyBase {
    contentType: string;
    getSearchJson200ApplicationJsonObject?: GetSearchJson200ApplicationJson;
    statusCode: number;
}
