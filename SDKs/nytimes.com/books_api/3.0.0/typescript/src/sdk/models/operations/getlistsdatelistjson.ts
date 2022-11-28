import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListsDateListJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=list" })
  list: string;
}

export enum GetListsDateListJsonSortOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}


export class GetListsDateListJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bestsellers-date" })
  bestsellersDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list-name" })
  listName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published-date" })
  publishedDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank" })
  rank?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank-last-week" })
  rankLastWeek?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort-order" })
  sortOrder?: GetListsDateListJsonSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weeks-on-list" })
  weeksOnList?: number;
}


export class GetListsDateListJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsDateListJson200ApplicationJsonResultsBooksIsbns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isbn10" })
  isbn10?: string;

  @SpeakeasyMetadata({ data: "json, name=isbn13" })
  isbn13?: string;
}


export class GetListsDateListJson200ApplicationJsonResultsBooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age_group" })
  ageGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=amazon_product_url" })
  amazonProductUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=article_chapter_link" })
  articleChapterLink?: string;

  @SpeakeasyMetadata({ data: "json, name=asterisk" })
  asterisk?: number;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=book_image" })
  bookImage?: string;

  @SpeakeasyMetadata({ data: "json, name=book_review_link" })
  bookReviewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_note" })
  contributorNote?: string;

  @SpeakeasyMetadata({ data: "json, name=dagger" })
  dagger?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=first_chapter_link" })
  firstChapterLink?: string;

  @SpeakeasyMetadata({ data: "json, name=isbns", elemType: GetListsDateListJson200ApplicationJsonResultsBooksIsbns })
  isbns?: GetListsDateListJson200ApplicationJsonResultsBooksIsbns[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_isbn10" })
  primaryIsbn10?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_isbn13" })
  primaryIsbn13?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=rank_last_week" })
  rankLastWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=sunday_review_link" })
  sundayReviewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=weeks_on_list" })
  weeksOnList?: number;
}


export class GetListsDateListJson200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @SpeakeasyMetadata({ data: "json, name=books", elemType: GetListsDateListJson200ApplicationJsonResultsBooks })
  books?: GetListsDateListJson200ApplicationJsonResultsBooks[];

  @SpeakeasyMetadata({ data: "json, name=corrections" })
  corrections?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=list_name" })
  listName?: string;

  @SpeakeasyMetadata({ data: "json, name=normal_list_ends_at" })
  normalListEndsAt?: number;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}


export class GetListsDateListJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetListsDateListJson200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsDateListJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListsDateListJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListsDateListJsonQueryParams;

  @SpeakeasyMetadata()
  security: GetListsDateListJsonSecurity;
}


export class GetListsDateListJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListsDateListJson200ApplicationJsonObject?: GetListsDateListJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
