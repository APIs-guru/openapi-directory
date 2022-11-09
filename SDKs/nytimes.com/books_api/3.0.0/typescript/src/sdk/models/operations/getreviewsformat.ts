import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetReviewsFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
}


export class GetReviewsFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetReviewsFormatFormatEnum;
}


export class GetReviewsFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetReviewsFormatSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetReviewsFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReviewsFormatPathParams;

  @Metadata()
  queryParams: GetReviewsFormatQueryParams;

  @Metadata()
  security: GetReviewsFormatSecurity;
}


export class GetReviewsFormat200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=book_author" })
  bookAuthor?: string;

  @Metadata({ data: "json, name=book_title" })
  bookTitle?: string;

  @Metadata({ data: "json, name=byline" })
  byline?: string;

  @Metadata({ data: "json, name=isbn13" })
  isbn13?: string[];

  @Metadata({ data: "json, name=publication_dt" })
  publicationDt?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class GetReviewsFormat200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: operations.GetReviewsFormat200ApplicationJsonResults })
  results?: GetReviewsFormat200ApplicationJsonResults[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetReviewsFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReviewsFormat200ApplicationJsonObject?: GetReviewsFormat200ApplicationJson;

  @Metadata()
  statusCode: number;
}
