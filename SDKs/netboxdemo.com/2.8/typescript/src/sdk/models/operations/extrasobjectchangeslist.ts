import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasObjectChangesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action__n" })
  actionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id" })
  changedObjectId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__gt" })
  changedObjectIdGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__gte" })
  changedObjectIdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__lt" })
  changedObjectIdLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__lte" })
  changedObjectIdLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__n" })
  changedObjectIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_type" })
  changedObjectType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_type__n" })
  changedObjectTypeN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" })
  idGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" })
  idGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" })
  idLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" })
  idLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" })
  idN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr" })
  objectRepr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__ic" })
  objectReprIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__ie" })
  objectReprIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__iew" })
  objectReprIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__isw" })
  objectReprIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__n" })
  objectReprN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__nic" })
  objectReprNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__nie" })
  objectReprNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__niew" })
  objectReprNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__nisw" })
  objectReprNisw?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user__n" })
  userN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__ic" })
  userNameIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__ie" })
  userNameIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__iew" })
  userNameIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__isw" })
  userNameIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__n" })
  userNameN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__nic" })
  userNameNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__nie" })
  userNameNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__niew" })
  userNameNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__nisw" })
  userNameNisw?: string;
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
