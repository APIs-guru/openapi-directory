import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetSearchJsonFieldsEnum {
    All = "all"
,    Pages = "pages"
,    TickerSymbol = "ticker_symbol"
,    Links = "links"
,    Taxonomy = "taxonomy"
,    Combinations = "combinations"
,    Geocodes = "geocodes"
,    ArticleList = "article_list"
,    ScopeNotes = "scope_notes"
,    SearchApiQuery = "search_api_query"
}


export class GetSearchJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: GetSearchJsonFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetSearchJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchJsonQueryParams;
}


export class GetSearchJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.ConceptRelation })
  results?: shared.ConceptRelation[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetSearchJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSearchJson200ApplicationJsonObject?: GetSearchJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
