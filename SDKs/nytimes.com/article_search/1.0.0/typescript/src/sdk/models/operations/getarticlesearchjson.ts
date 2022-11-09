import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetArticlesearchJsonSortEnum {
    Newest = "newest"
,    Oldest = "oldest"
}


export class GetArticlesearchJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=begin_date" })
  beginDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_field" })
  facetField?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet_filter" })
  facetFilter?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fl" })
  fl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fq" })
  fq?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hl" })
  hl?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetArticlesearchJsonSortEnum;
}


export class GetArticlesearchJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetArticlesearchJsonQueryParams;
}


export class GetArticlesearchJson200ApplicationJsonResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=hits" })
  hits?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=time" })
  time?: number;
}


export class GetArticlesearchJson200ApplicationJsonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=docs", elemType: shared.Doc })
  docs?: shared.Doc[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetArticlesearchJson200ApplicationJsonResponseMeta;
}


export class GetArticlesearchJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=response" })
  response?: GetArticlesearchJson200ApplicationJsonResponse;
}


export class GetArticlesearchJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getArticlesearchJson200ApplicationJsonObject?: GetArticlesearchJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
