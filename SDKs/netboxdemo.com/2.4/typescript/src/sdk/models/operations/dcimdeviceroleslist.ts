import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceRolesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=color" })
  color?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vm_role" })
  vmRole?: string;
}


export class DcimDeviceRolesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimDeviceRolesListQueryParams;
}


export class DcimDeviceRolesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.DeviceRole })
  results: shared.DeviceRole[];
}


export class DcimDeviceRolesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimDeviceRolesList200ApplicationJsonObject?: DcimDeviceRolesList200ApplicationJson;
}
