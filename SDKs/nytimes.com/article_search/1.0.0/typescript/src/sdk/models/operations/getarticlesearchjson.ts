import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetArticlesearchJsonSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}


export class GetArticlesearchJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=begin_date" })
  beginDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_field" })
  facetField?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_filter" })
  facetFilter?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fl" })
  fl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fq" })
  fq?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" })
  hl?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetArticlesearchJsonSortEnum;
}


export class GetArticlesearchJson200ApplicationJsonResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hits" })
  hits?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;
}


export class GetArticlesearchJson200ApplicationJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=docs", elemType: shared.Doc })
  docs?: shared.Doc[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetArticlesearchJson200ApplicationJsonResponseMeta;
}


export class GetArticlesearchJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: GetArticlesearchJson200ApplicationJsonResponse;
}


export class GetArticlesearchJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetArticlesearchJsonQueryParams;
}


export class GetArticlesearchJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getArticlesearchJson200ApplicationJsonObject?: GetArticlesearchJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
