import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetListsFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}


export class GetListsFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetListsFormatFormatEnum;
}

export enum GetListsFormatSortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}


export class GetListsFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bestsellers-date" })
  bestsellersDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list" })
  list?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published-date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank-last-week" })
  rankLastWeek?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort-order" })
  sortOrder?: GetListsFormatSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weeks-on-list" })
  weeksOnList?: number;
}


export class GetListsFormatSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsFormat200ApplicationJsonResultsBookDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age_group" })
  ageGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_note" })
  contributorNote?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_isbn10" })
  primaryIsbn10?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_isbn13" })
  primaryIsbn13?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetListsFormat200ApplicationJsonResultsIsbns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isbn10" })
  isbn10?: string;

  @SpeakeasyMetadata({ data: "json, name=isbn13" })
  isbn13?: string;
}


export class GetListsFormat200ApplicationJsonResultsReviews extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=article_chapter_link" })
  articleChapterLink?: string;

  @SpeakeasyMetadata({ data: "json, name=book_review_link" })
  bookReviewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=first_chapter_link" })
  firstChapterLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sunday_review_link" })
  sundayReviewLink?: string;
}


export class GetListsFormat200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amazon_product_url" })
  amazonProductUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=asterisk" })
  asterisk?: number;

  @SpeakeasyMetadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @SpeakeasyMetadata({ data: "json, name=book_details", elemType: GetListsFormat200ApplicationJsonResultsBookDetails })
  bookDetails?: GetListsFormat200ApplicationJsonResultsBookDetails[];

  @SpeakeasyMetadata({ data: "json, name=dagger" })
  dagger?: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isbns", elemType: GetListsFormat200ApplicationJsonResultsIsbns })
  isbns?: GetListsFormat200ApplicationJsonResultsIsbns[];

  @SpeakeasyMetadata({ data: "json, name=list_name" })
  listName?: string;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=rank_last_week" })
  rankLastWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=reviews", elemType: GetListsFormat200ApplicationJsonResultsReviews })
  reviews?: GetListsFormat200ApplicationJsonResultsReviews[];

  @SpeakeasyMetadata({ data: "json, name=weeks_on_list" })
  weeksOnList?: number;
}


export class GetListsFormat200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetListsFormat200ApplicationJsonResults })
  results?: GetListsFormat200ApplicationJsonResults[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListsFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListsFormatQueryParams;

  @SpeakeasyMetadata()
  security: GetListsFormatSecurity;
}


export class GetListsFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListsFormat200ApplicationJsonObject?: GetListsFormat200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
