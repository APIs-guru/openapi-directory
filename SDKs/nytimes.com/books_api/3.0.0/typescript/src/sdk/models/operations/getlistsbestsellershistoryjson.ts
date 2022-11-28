import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListsBestSellersHistoryJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=age-group" })
  ageGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isbn" })
  isbn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetListsBestSellersHistoryJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isbn10" })
  isbn10?: string;

  @SpeakeasyMetadata({ data: "json, name=isbn13" })
  isbn13?: string;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asterisk" })
  asterisk?: number;

  @SpeakeasyMetadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @SpeakeasyMetadata({ data: "json, name=dagger" })
  dagger?: number;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=list_name" })
  listName?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_isbn10" })
  primaryIsbn10?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_isbn13" })
  primaryIsbn13?: string;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=ranks_last_week" })
  ranksLastWeek?: any;

  @SpeakeasyMetadata({ data: "json, name=weeks_on_list" })
  weeksOnList?: number;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=article_chapter_link" })
  articleChapterLink?: string;

  @SpeakeasyMetadata({ data: "json, name=book_review_link" })
  bookReviewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=first_chapter_link" })
  firstChapterLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sunday_review_link" })
  sundayReviewLink?: string;
}


export class GetListsBestSellersHistoryJson200ApplicationJsonResults extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=isbns", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns })
  isbns?: GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=ranks_history", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory })
  ranksHistory?: GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory[];

  @SpeakeasyMetadata({ data: "json, name=reviews", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews })
  reviews?: GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetListsBestSellersHistoryJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetListsBestSellersHistoryJson200ApplicationJsonResults })
  results?: GetListsBestSellersHistoryJson200ApplicationJsonResults[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsBestSellersHistoryJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListsBestSellersHistoryJsonQueryParams;

  @SpeakeasyMetadata()
  security: GetListsBestSellersHistoryJsonSecurity;
}


export class GetListsBestSellersHistoryJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListsBestSellersHistoryJson200ApplicationJsonObject?: GetListsBestSellersHistoryJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
