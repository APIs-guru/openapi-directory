import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetReviewsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}


export class GetReviewsFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetReviewsFormatFormatEnum;
}


export class GetReviewsFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetReviewsFormatSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetReviewsFormat200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=book_author" })
  bookAuthor?: string;

  @SpeakeasyMetadata({ data: "json, name=book_title" })
  bookTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: string;

  @SpeakeasyMetadata({ data: "json, name=isbn13" })
  isbn13?: string[];

  @SpeakeasyMetadata({ data: "json, name=publication_dt" })
  publicationDt?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class GetReviewsFormat200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetReviewsFormat200ApplicationJsonResults })
  results?: GetReviewsFormat200ApplicationJsonResults[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetReviewsFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReviewsFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetReviewsFormatQueryParams;

  @SpeakeasyMetadata()
  security: GetReviewsFormatSecurity;
}


export class GetReviewsFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReviewsFormat200ApplicationJsonObject?: GetReviewsFormat200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
