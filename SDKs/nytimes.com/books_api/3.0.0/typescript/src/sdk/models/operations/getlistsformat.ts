import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetListsFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
}


export class GetListsFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetListsFormatFormatEnum;
}

export enum GetListsFormatSortOrderEnum {
    Asc = "ASC"
,    Desc = "DESC"
}


export class GetListsFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bestsellers-date" })
  bestsellersDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=list" })
  list?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=published-date" })
  publishedDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rank" })
  rank?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rank-last-week" })
  rankLastWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort-order" })
  sortOrder?: GetListsFormatSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weeks-on-list" })
  weeksOnList?: number;
}


export class GetListsFormatSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListsFormatPathParams;

  @Metadata()
  queryParams: GetListsFormatQueryParams;

  @Metadata()
  security: GetListsFormatSecurity;
}


export class GetListsFormat200ApplicationJsonResultsBookDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=age_group" })
  ageGroup?: string;

  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=contributor" })
  contributor?: string;

  @Metadata({ data: "json, name=contributor_note" })
  contributorNote?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=primary_isbn10" })
  primaryIsbn10?: string;

  @Metadata({ data: "json, name=primary_isbn13" })
  primaryIsbn13?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetListsFormat200ApplicationJsonResultsIsbns extends SpeakeasyBase {
  @Metadata({ data: "json, name=isbn10" })
  isbn10?: string;

  @Metadata({ data: "json, name=isbn13" })
  isbn13?: string;
}


export class GetListsFormat200ApplicationJsonResultsReviews extends SpeakeasyBase {
  @Metadata({ data: "json, name=article_chapter_link" })
  articleChapterLink?: string;

  @Metadata({ data: "json, name=book_review_link" })
  bookReviewLink?: string;

  @Metadata({ data: "json, name=first_chapter_link" })
  firstChapterLink?: string;

  @Metadata({ data: "json, name=sunday_review_link" })
  sundayReviewLink?: string;
}


export class GetListsFormat200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=amazon_product_url" })
  amazonProductUrl?: string;

  @Metadata({ data: "json, name=asterisk" })
  asterisk?: number;

  @Metadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @Metadata({ data: "json, name=book_details", elemType: operations.GetListsFormat200ApplicationJsonResultsBookDetails })
  bookDetails?: GetListsFormat200ApplicationJsonResultsBookDetails[];

  @Metadata({ data: "json, name=dagger" })
  dagger?: number;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=isbns", elemType: operations.GetListsFormat200ApplicationJsonResultsIsbns })
  isbns?: GetListsFormat200ApplicationJsonResultsIsbns[];

  @Metadata({ data: "json, name=list_name" })
  listName?: string;

  @Metadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=rank_last_week" })
  rankLastWeek?: number;

  @Metadata({ data: "json, name=reviews", elemType: operations.GetListsFormat200ApplicationJsonResultsReviews })
  reviews?: GetListsFormat200ApplicationJsonResultsReviews[];

  @Metadata({ data: "json, name=weeks_on_list" })
  weeksOnList?: number;
}


export class GetListsFormat200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: operations.GetListsFormat200ApplicationJsonResults })
  results?: GetListsFormat200ApplicationJsonResults[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListsFormat200ApplicationJsonObject?: GetListsFormat200ApplicationJson;

  @Metadata()
  statusCode: number;
}
