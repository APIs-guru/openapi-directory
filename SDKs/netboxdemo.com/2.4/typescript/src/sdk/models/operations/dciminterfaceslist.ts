import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfacesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_factor" })
  formFactor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lag_id" })
  lagId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" })
  mgmtOnly?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" })
  vlan?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan_id" })
  vlanId?: string;
}


export class DcimInterfacesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Interface })
  results: shared.Interface[];
}


export class DcimInterfacesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimInterfacesListQueryParams;
}


export class DcimInterfacesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimInterfacesList200ApplicationJsonObject?: DcimInterfacesList200ApplicationJson;
}
