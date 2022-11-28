import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceRolesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__ic" })
  colorIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__ie" })
  colorIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__iew" })
  colorIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__isw" })
  colorIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__n" })
  colorN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nic" })
  colorNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nie" })
  colorNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__niew" })
  colorNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nisw" })
  colorNisw?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" })
  slugIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" })
  slugIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" })
  slugIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" })
  slugIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" })
  slugN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" })
  slugNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" })
  slugNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" })
  slugNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" })
  slugNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vm_role" })
  vmRole?: string;
}


export class DcimDeviceRolesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceRole })
  results: shared.DeviceRole[];
}


export class DcimDeviceRolesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimDeviceRolesListQueryParams;
}


export class DcimDeviceRolesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimDeviceRolesList200ApplicationJsonObject?: DcimDeviceRolesList200ApplicationJson;
}
