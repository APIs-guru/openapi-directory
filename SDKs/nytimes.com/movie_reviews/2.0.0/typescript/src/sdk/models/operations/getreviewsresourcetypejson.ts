import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetReviewsResourceTypeJsonResourceTypeEnum {
    All = "all",
    Picks = "picks"
}


export class GetReviewsResourceTypeJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource-type" })
  resourceType: GetReviewsResourceTypeJsonResourceTypeEnum;
}

export enum GetReviewsResourceTypeJsonOrderEnum {
    ByTitle = "by-title",
    ByPublicationDate = "by-publication-date",
    ByOpeningDate = "by-opening-date"
}


export class GetReviewsResourceTypeJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetReviewsResourceTypeJsonOrderEnum;
}


export class GetReviewsResourceTypeJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Movie })
  results?: shared.Movie[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetReviewsResourceTypeJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReviewsResourceTypeJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetReviewsResourceTypeJsonQueryParams;
}


export class GetReviewsResourceTypeJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReviewsResourceTypeJson200ApplicationJsonObject?: GetReviewsResourceTypeJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
