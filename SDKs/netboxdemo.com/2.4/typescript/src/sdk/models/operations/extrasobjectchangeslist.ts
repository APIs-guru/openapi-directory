import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasObjectChangesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_type" })
  changedObjectType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr" })
  objectRepr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=request_id" })
  requestId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName?: string;
}


export class ExtrasObjectChangesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ExtrasObjectChangesListQueryParams;
}


export class ExtrasObjectChangesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ObjectChange })
  results: shared.ObjectChange[];
}


export class ExtrasObjectChangesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  extrasObjectChangesList200ApplicationJsonObject?: ExtrasObjectChangesList200ApplicationJson;
}
