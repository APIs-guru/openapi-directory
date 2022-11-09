import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_type_id" })
  deviceTypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_primary_ip" })
  hasPrimaryIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_console_server" })
  isConsoleServer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_full_depth" })
  isFullDepth?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_network_device" })
  isNetworkDevice?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_pdu" })
  isPdu?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_group_id" })
  rackGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_id" })
  virtualChassisId?: string;
}


export class DcimDevicesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimDevicesListQueryParams;
}


export class DcimDevicesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Device })
  results: shared.Device[];
}


export class DcimDevicesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimDevicesList200ApplicationJsonObject?: DcimDevicesList200ApplicationJson;
}
