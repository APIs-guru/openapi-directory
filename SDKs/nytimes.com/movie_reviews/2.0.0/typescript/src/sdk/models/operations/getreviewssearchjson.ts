import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetReviewsSearchJsonCriticsPickEnum {
    Y = "Y"
,    N = "N"
}


export class GetReviewsSearchJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=critics-pick" })
  criticsPick?: GetReviewsSearchJsonCriticsPickEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=opening-date" })
  openingDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publication-date" })
  publicationDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reviewer" })
  reviewer?: string;
}


export class GetReviewsSearchJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReviewsSearchJsonQueryParams;
}


export class GetReviewsSearchJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Movie })
  results?: shared.Movie[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetReviewsSearchJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReviewsSearchJson200ApplicationJsonObject?: GetReviewsSearchJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
