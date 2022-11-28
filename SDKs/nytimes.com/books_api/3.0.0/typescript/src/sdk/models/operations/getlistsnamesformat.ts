import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetListsNamesFormatFormatEnum {
    Json = "json",
    Jsonp = "jsonp"
}


export class GetListsNamesFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetListsNamesFormatFormatEnum;
}


export class GetListsNamesFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-key" })
  apiKey?: string;
}


export class GetListsNamesFormatSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetListsNamesFormat200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=list_name" })
  listName?: string;

  @SpeakeasyMetadata({ data: "json, name=list_name_encoded" })
  listNameEncoded?: string;

  @SpeakeasyMetadata({ data: "json, name=newest_published_date" })
  newestPublishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=oldest_published_date" })
  oldestPublishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}


export class GetListsNamesFormat200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: GetListsNamesFormat200ApplicationJsonResults })
  results?: GetListsNamesFormat200ApplicationJsonResults[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetListsNamesFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListsNamesFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListsNamesFormatQueryParams;

  @SpeakeasyMetadata()
  security: GetListsNamesFormatSecurity;
}


export class GetListsNamesFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListsNamesFormat200ApplicationJsonObject?: GetListsNamesFormat200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
