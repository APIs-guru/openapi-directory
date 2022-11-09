import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasObjectChangesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=action__n" })
  actionN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_id" })
  changedObjectId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__gt" })
  changedObjectIdGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__gte" })
  changedObjectIdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__lt" })
  changedObjectIdLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__lte" })
  changedObjectIdLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__n" })
  changedObjectIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_type" })
  changedObjectType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changed_object_type__n" })
  changedObjectTypeN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__gt" })
  idGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__gte" })
  idGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__lt" })
  idLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__lte" })
  idLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__n" })
  idN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr" })
  objectRepr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__ic" })
  objectReprIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__ie" })
  objectReprIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__iew" })
  objectReprIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__isw" })
  objectReprIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__n" })
  objectReprN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__nic" })
  objectReprNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__nie" })
  objectReprNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__niew" })
  objectReprNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=object_repr__nisw" })
  objectReprNisw?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=user__n" })
  userN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__ic" })
  userNameIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__ie" })
  userNameIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__iew" })
  userNameIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__isw" })
  userNameIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__n" })
  userNameN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__nic" })
  userNameNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__nie" })
  userNameNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__niew" })
  userNameNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_name__nisw" })
  userNameNisw?: string;
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
