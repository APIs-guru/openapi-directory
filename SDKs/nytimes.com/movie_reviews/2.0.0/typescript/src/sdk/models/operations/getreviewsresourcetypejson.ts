import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetReviewsResourceTypeJsonResourceTypeEnum {
    All = "all"
,    Picks = "picks"
}


export class GetReviewsResourceTypeJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource-type" })
  resourceType: GetReviewsResourceTypeJsonResourceTypeEnum;
}

export enum GetReviewsResourceTypeJsonOrderEnum {
    ByTitle = "by-title"
,    ByPublicationDate = "by-publication-date"
,    ByOpeningDate = "by-opening-date"
}


export class GetReviewsResourceTypeJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetReviewsResourceTypeJsonOrderEnum;
}


export class GetReviewsResourceTypeJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReviewsResourceTypeJsonPathParams;

  @Metadata()
  queryParams: GetReviewsResourceTypeJsonQueryParams;
}


export class GetReviewsResourceTypeJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Movie })
  results?: shared.Movie[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetReviewsResourceTypeJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReviewsResourceTypeJson200ApplicationJsonObject?: GetReviewsResourceTypeJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
