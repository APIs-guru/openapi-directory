import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDevicesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_type_id" })
  deviceTypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_primary_ip" })
  hasPrimaryIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_console_server" })
  isConsoleServer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_full_depth" })
  isFullDepth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_network_device" })
  isNetworkDevice?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_pdu" })
  isPdu?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_group_id" })
  rackGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_id" })
  virtualChassisId?: string;
}


export class DcimDevicesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Device })
  results: shared.Device[];
}


export class DcimDevicesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimDevicesListQueryParams;
}


export class DcimDevicesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimDevicesList200ApplicationJsonObject?: DcimDevicesList200ApplicationJson;
}
