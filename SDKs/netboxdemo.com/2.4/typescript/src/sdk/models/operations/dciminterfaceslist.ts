import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfacesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=form_factor" })
  formFactor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lag_id" })
  lagId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" })
  mgmtOnly?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mtu" })
  mtu?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan" })
  vlan?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vlan_id" })
  vlanId?: string;
}


export class DcimInterfacesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimInterfacesListQueryParams;
}


export class DcimInterfacesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Interface })
  results: shared.Interface[];
}


export class DcimInterfacesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimInterfacesList200ApplicationJsonObject?: DcimInterfacesList200ApplicationJson;
}
