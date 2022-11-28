import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetNameConceptTypeSpecificConceptJsonConceptTypeEnum {
    NytdGeo = "nytd_geo",
    NytdPer = "nytd_per",
    NytdOrg = "nytd_org",
    NytdDes = "nytd_des"
}


export class GetNameConceptTypeSpecificConceptJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=concept-type" })
  conceptType: GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=specific-concept" })
  specificConcept: string;
}

export enum GetNameConceptTypeSpecificConceptJsonFieldsEnum {
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


export class GetNameConceptTypeSpecificConceptJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: GetNameConceptTypeSpecificConceptJsonFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetNameConceptTypeSpecificConceptJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Concept })
  results?: shared.Concept[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetNameConceptTypeSpecificConceptJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNameConceptTypeSpecificConceptJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNameConceptTypeSpecificConceptJsonQueryParams;
}


export class GetNameConceptTypeSpecificConceptJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getNameConceptTypeSpecificConceptJson200ApplicationJsonObject?: GetNameConceptTypeSpecificConceptJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
