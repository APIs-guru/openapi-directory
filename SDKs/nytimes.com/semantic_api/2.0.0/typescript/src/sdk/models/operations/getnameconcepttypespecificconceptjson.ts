import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetNameConceptTypeSpecificConceptJsonConceptTypeEnum {
    NytdGeo = "nytd_geo"
,    NytdPer = "nytd_per"
,    NytdOrg = "nytd_org"
,    NytdDes = "nytd_des"
}


export class GetNameConceptTypeSpecificConceptJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=concept-type" })
  conceptType: GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=specific-concept" })
  specificConcept: string;
}

export enum GetNameConceptTypeSpecificConceptJsonFieldsEnum {
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


export class GetNameConceptTypeSpecificConceptJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: GetNameConceptTypeSpecificConceptJsonFieldsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetNameConceptTypeSpecificConceptJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNameConceptTypeSpecificConceptJsonPathParams;

  @Metadata()
  queryParams: GetNameConceptTypeSpecificConceptJsonQueryParams;
}


export class GetNameConceptTypeSpecificConceptJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Concept })
  results?: shared.Concept[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetNameConceptTypeSpecificConceptJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNameConceptTypeSpecificConceptJson200ApplicationJsonObject?: GetNameConceptTypeSpecificConceptJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
