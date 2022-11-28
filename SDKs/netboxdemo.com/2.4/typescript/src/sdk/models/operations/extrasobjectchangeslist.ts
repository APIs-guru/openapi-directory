import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasObjectChangesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_type" })
  changedObjectType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr" })
  objectRepr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName?: string;
}


export class ExtrasObjectChangesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ObjectChange })
  results: shared.ObjectChange[];
}


export class ExtrasObjectChangesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExtrasObjectChangesListQueryParams;
}


export class ExtrasObjectChangesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  extrasObjectChangesList200ApplicationJsonObject?: ExtrasObjectChangesList200ApplicationJson;
}
