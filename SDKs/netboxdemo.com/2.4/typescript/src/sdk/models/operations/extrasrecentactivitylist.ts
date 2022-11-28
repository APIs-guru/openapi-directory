import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasRecentActivityListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class ExtrasRecentActivityList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.UserAction })
  results: shared.UserAction[];
}


export class ExtrasRecentActivityListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExtrasRecentActivityListQueryParams;
}


export class ExtrasRecentActivityListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  extrasRecentActivityList200ApplicationJsonObject?: ExtrasRecentActivityList200ApplicationJson;
}
