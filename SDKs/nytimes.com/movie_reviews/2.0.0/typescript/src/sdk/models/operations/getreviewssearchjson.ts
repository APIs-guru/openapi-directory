import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetReviewsSearchJsonCriticsPickEnum {
    Y = "Y",
    N = "N"
}


export class GetReviewsSearchJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=critics-pick" })
  criticsPick?: GetReviewsSearchJsonCriticsPickEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opening-date" })
  openingDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publication-date" })
  publicationDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reviewer" })
  reviewer?: string;
}


export class GetReviewsSearchJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Movie })
  results?: shared.Movie[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetReviewsSearchJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReviewsSearchJsonQueryParams;
}


export class GetReviewsSearchJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReviewsSearchJson200ApplicationJsonObject?: GetReviewsSearchJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
