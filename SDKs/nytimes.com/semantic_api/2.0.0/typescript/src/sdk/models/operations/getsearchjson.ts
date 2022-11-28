import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSearchJsonFieldsEnum {
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


export class GetSearchJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: GetSearchJsonFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetSearchJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ConceptRelation })
  results?: shared.ConceptRelation[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetSearchJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchJsonQueryParams;
}


export class GetSearchJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSearchJson200ApplicationJsonObject?: GetSearchJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
