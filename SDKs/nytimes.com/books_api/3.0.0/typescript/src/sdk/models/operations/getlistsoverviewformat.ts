import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetListsOverviewFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
}


export class GetListsOverviewFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetListsOverviewFormatFormatEnum;
}


export class GetListsOverviewFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=published_date" })
  publishedDate?: string;
}


export class GetListsOverviewFormatSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsOverviewFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListsOverviewFormatPathParams;

  @Metadata()
  queryParams: GetListsOverviewFormatQueryParams;

  @Metadata()
  security: GetListsOverviewFormatSecurity;
}


export class GetListsOverviewFormat200ApplicationJsonResultsListsBooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=age_group" })
  ageGroup?: string;

  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=contributor" })
  contributor?: string;

  @Metadata({ data: "json, name=contributor_note" })
  contributorNote?: string;

  @Metadata({ data: "json, name=created_date" })
  createdDate?: string;

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

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_date" })
  updatedDate?: string;
}


export class GetListsOverviewFormat200ApplicationJsonResultsLists extends SpeakeasyBase {
  @Metadata({ data: "json, name=books", elemType: operations.GetListsOverviewFormat200ApplicationJsonResultsListsBooks })
  books?: GetListsOverviewFormat200ApplicationJsonResultsListsBooks[];

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=list_id" })
  listId?: number;

  @Metadata({ data: "json, name=list_image" })
  listImage?: string;

  @Metadata({ data: "json, name=list_name" })
  listName?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}


export class GetListsOverviewFormat200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestsellers_date" })
  bestsellersDate?: string;

  @Metadata({ data: "json, name=lists", elemType: operations.GetListsOverviewFormat200ApplicationJsonResultsLists })
  lists?: GetListsOverviewFormat200ApplicationJsonResultsLists[];

  @Metadata({ data: "json, name=published_date" })
  publishedDate?: string;
}


export class GetListsOverviewFormat200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results" })
  results?: GetListsOverviewFormat200ApplicationJsonResults;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsOverviewFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListsOverviewFormat200ApplicationJsonObject?: GetListsOverviewFormat200ApplicationJson;

  @Metadata()
  statusCode: number;
}
