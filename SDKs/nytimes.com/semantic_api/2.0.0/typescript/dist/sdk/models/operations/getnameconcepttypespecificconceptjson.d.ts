import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetNameConceptTypeSpecificConceptJsonConceptTypeEnum {
    NytdGeo = "nytd_geo",
    NytdPer = "nytd_per",
    NytdOrg = "nytd_org",
    NytdDes = "nytd_des"
}
export declare class GetNameConceptTypeSpecificConceptJsonPathParams extends SpeakeasyBase {
    conceptType: GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;
    specificConcept: string;
}
export declare enum GetNameConceptTypeSpecificConceptJsonFieldsEnum {
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
export declare class GetNameConceptTypeSpecificConceptJsonQueryParams extends SpeakeasyBase {
    fields?: GetNameConceptTypeSpecificConceptJsonFieldsEnum;
    query: string;
}
export declare class GetNameConceptTypeSpecificConceptJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Concept[];
    status?: string;
}
export declare class GetNameConceptTypeSpecificConceptJsonRequest extends SpeakeasyBase {
    pathParams: GetNameConceptTypeSpecificConceptJsonPathParams;
    queryParams: GetNameConceptTypeSpecificConceptJsonQueryParams;
}
export declare class GetNameConceptTypeSpecificConceptJsonResponse extends SpeakeasyBase {
    contentType: string;
    getNameConceptTypeSpecificConceptJson200ApplicationJsonObject?: GetNameConceptTypeSpecificConceptJson200ApplicationJson;
    statusCode: number;
}
