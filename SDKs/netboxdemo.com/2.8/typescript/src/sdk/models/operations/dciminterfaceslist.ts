import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfacesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cabled" })
  cabled?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status" })
  connectionStatus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connection_status__n" })
  connectionStatusN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ic" })
  descriptionIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ie" })
  descriptionIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__iew" })
  descriptionIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__isw" })
  descriptionIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__n" })
  descriptionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nic" })
  descriptionNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nie" })
  descriptionNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__niew" })
  descriptionNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nisw" })
  descriptionNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lag_id" })
  lagId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lag_id__n" })
  lagIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ic" })
  macAddressIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__ie" })
  macAddressIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__iew" })
  macAddressIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__isw" })
  macAddressIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__n" })
  macAddressN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nic" })
  macAddressNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nie" })
  macAddressNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__niew" })
  macAddressNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address__nisw" })
  macAddressNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" })
  mgmtOnly?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode__n" })
  modeN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu" })
  mtu?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__gt" })
  mtuGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__gte" })
  mtuGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__lt" })
  mtuLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__lte" })
  mtuLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mtu__n" })
  mtuN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" })
  regionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" })
  regionIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" })
  siteN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" })
  siteIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type__n" })
  typeN?: string;

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

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceInterface })
  results: shared.DeviceInterface[];
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
