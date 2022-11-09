import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetListsNamesFormatFormatEnum {
    Json = "json"
,    Jsonp = "jsonp"
}


export class GetListsNamesFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetListsNamesFormatFormatEnum;
}


export class GetListsNamesFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api-key" })
  apiKey?: string;
}


export class GetListsNamesFormatSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsNamesFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListsNamesFormatPathParams;

  @Metadata()
  queryParams: GetListsNamesFormatQueryParams;

  @Metadata()
  security: GetListsNamesFormatSecurity;
}


export class GetListsNamesFormat200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=list_name" })
  listName?: string;

  @Metadata({ data: "json, name=list_name_encoded" })
  listNameEncoded?: string;

  @Metadata({ data: "json, name=newest_published_date" })
  newestPublishedDate?: string;

  @Metadata({ data: "json, name=oldest_published_date" })
  oldestPublishedDate?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}


export class GetListsNamesFormat200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: operations.GetListsNamesFormat200ApplicationJsonResults })
  results?: GetListsNamesFormat200ApplicationJsonResults[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsNamesFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListsNamesFormat200ApplicationJsonObject?: GetListsNamesFormat200ApplicationJson;

  @Metadata()
  statusCode: number;
}
