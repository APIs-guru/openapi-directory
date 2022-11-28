import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetListsOverviewFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}


export class GetListsOverviewFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetListsOverviewFormatFormatEnum;
}


export class GetListsOverviewFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published_date" })
  publishedDate?: string;
}


export class GetListsOverviewFormatSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsOverviewFormat200ApplicationJsonResultsListsBooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age_group" })
  ageGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_note" })
  contributorNote?: string;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

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

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_date" })
  updatedDate?: string;
}


export class GetListsOverviewFormat200ApplicationJsonResultsLists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=books", elemType: GetListsOverviewFormat200ApplicationJsonResultsListsBooks })
  books?: GetListsOverviewFormat200ApplicationJsonResultsListsBooks[];

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=list_id" })
  listId?: number;

  @SpeakeasyMetadata({ data: "json, name=list_image" })
  listImage?: string;

  @SpeakeasyMetadata({ data: "json, name=list_name" })
  listName?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}


export class GetListsOverviewFormat200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lists", elemType: GetListsOverviewFormat200ApplicationJsonResultsLists })
  lists?: GetListsOverviewFormat200ApplicationJsonResultsLists[];

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;
}


export class GetListsOverviewFormat200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetListsOverviewFormat200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsOverviewFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListsOverviewFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListsOverviewFormatQueryParams;

  @SpeakeasyMetadata()
  security: GetListsOverviewFormatSecurity;
}


export class GetListsOverviewFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListsOverviewFormat200ApplicationJsonObject?: GetListsOverviewFormat200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
