import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListsDateListJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=list" })
  list: string;
}

export enum GetListsDateListJsonSortOrderEnum {
    Asc = "ASC"
,    Desc = "DESC"
}


export class GetListsDateListJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bestsellers-date" })
  bestsellersDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=list-name" })
  listName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=published-date" })
  publishedDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rank" })
  rank?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rank-last-week" })
  rankLastWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort-order" })
  sortOrder?: GetListsDateListJsonSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=weeks-on-list" })
  weeksOnList?: number;
}


export class GetListsDateListJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsDateListJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListsDateListJsonPathParams;

  @Metadata()
  queryParams: GetListsDateListJsonQueryParams;

  @Metadata()
  security: GetListsDateListJsonSecurity;
}


export class GetListsDateListJson200ApplicationJsonResultsBooksIsbns extends SpeakeasyBase {
  @Metadata({ data: "json, name=isbn10" })
  isbn10?: string;

  @Metadata({ data: "json, name=isbn13" })
  isbn13?: string;
}


export class GetListsDateListJson200ApplicationJsonResultsBooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=age_group" })
  ageGroup?: string;

  @Metadata({ data: "json, name=amazon_product_url" })
  amazonProductUrl?: string;

  @Metadata({ data: "json, name=article_chapter_link" })
  articleChapterLink?: string;

  @Metadata({ data: "json, name=asterisk" })
  asterisk?: number;

  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=book_image" })
  bookImage?: string;

  @Metadata({ data: "json, name=book_review_link" })
  bookReviewLink?: string;

  @Metadata({ data: "json, name=contributor" })
  contributor?: string;

  @Metadata({ data: "json, name=contributor_note" })
  contributorNote?: string;

  @Metadata({ data: "json, name=dagger" })
  dagger?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=first_chapter_link" })
  firstChapterLink?: string;

  @Metadata({ data: "json, name=isbns", elemType: operations.GetListsDateListJson200ApplicationJsonResultsBooksIsbns })
  isbns?: GetListsDateListJson200ApplicationJsonResultsBooksIsbns[];

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=primary_isbn10" })
  primaryIsbn10?: string;

  @Metadata({ data: "json, name=primary_isbn13" })
  primaryIsbn13?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=rank_last_week" })
  rankLastWeek?: number;

  @Metadata({ data: "json, name=sunday_review_link" })
  sundayReviewLink?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=weeks_on_list" })
  weeksOnList?: number;
}


export class GetListsDateListJson200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @Metadata({ data: "json, name=books", elemType: operations.GetListsDateListJson200ApplicationJsonResultsBooks })
  books?: GetListsDateListJson200ApplicationJsonResultsBooks[];

  @Metadata({ data: "json, name=corrections" })
  corrections?: Map<string, any>[];

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=list_name" })
  listName?: string;

  @Metadata({ data: "json, name=normal_list_ends_at" })
  normalListEndsAt?: number;

  @Metadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}


export class GetListsDateListJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=last_modified" })
  lastModified?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results" })
  results?: GetListsDateListJson200ApplicationJsonResults;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsDateListJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListsDateListJson200ApplicationJsonObject?: GetListsDateListJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
