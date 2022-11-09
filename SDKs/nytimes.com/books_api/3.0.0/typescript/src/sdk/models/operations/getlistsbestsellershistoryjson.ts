import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListsBestSellersHistoryJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=age-group" })
  ageGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=price" })
  price?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publisher" })
  publisher?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetListsBestSellersHistoryJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsBestSellersHistoryJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListsBestSellersHistoryJsonQueryParams;

  @Metadata()
  security: GetListsBestSellersHistoryJsonSecurity;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns extends SpeakeasyBase {
  @Metadata({ data: "json, name=isbn10" })
  isbn10?: string;

  @Metadata({ data: "json, name=isbn13" })
  isbn13?: string;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=asterisk" })
  asterisk?: number;

  @Metadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @Metadata({ data: "json, name=dagger" })
  dagger?: number;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=list_name" })
  listName?: string;

  @Metadata({ data: "json, name=primary_isbn10" })
  primaryIsbn10?: string;

  @Metadata({ data: "json, name=primary_isbn13" })
  primaryIsbn13?: string;

  @Metadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=ranks_last_week" })
  ranksLastWeek?: any;

  @Metadata({ data: "json, name=weeks_on_list" })
  weeksOnList?: number;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews extends SpeakeasyBase {
  @Metadata({ data: "json, name=article_chapter_link" })
  articleChapterLink?: string;

  @Metadata({ data: "json, name=book_review_link" })
  bookReviewLink?: string;

  @Metadata({ data: "json, name=first_chapter_link" })
  firstChapterLink?: string;

  @Metadata({ data: "json, name=sunday_review_link" })
  sundayReviewLink?: string;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResults extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=isbns", elemType: operations.GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns })
  isbns?: GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns[];

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=ranks_history", elemType: operations.GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory })
  ranksHistory?: GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory[];

  @Metadata({ data: "json, name=reviews", elemType: operations.GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews })
  reviews?: GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class GetListsBestSellersHistoryJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: operations.GetListsBestSellersHistoryJson200ApplicationJsonResults })
  results?: GetListsBestSellersHistoryJson200ApplicationJsonResults[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsBestSellersHistoryJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListsBestSellersHistoryJson200ApplicationJsonObject?: GetListsBestSellersHistoryJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
