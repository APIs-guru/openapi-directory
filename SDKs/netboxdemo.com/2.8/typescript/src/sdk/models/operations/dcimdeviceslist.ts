import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDevicesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ic" })
  assetTagIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ie" })
  assetTagIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__iew" })
  assetTagIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__isw" })
  assetTagIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__n" })
  assetTagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nic" })
  assetTagNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nie" })
  assetTagNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__niew" })
  assetTagNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nisw" })
  assetTagNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id__n" })
  clusterIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=console_ports" })
  consolePorts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=console_server_ports" })
  consoleServerPorts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_bays" })
  deviceBays?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_type_id" })
  deviceTypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_type_id__n" })
  deviceTypeIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=face" })
  face?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=face__n" })
  faceN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_primary_ip" })
  hasPrimaryIp?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interfaces" })
  interfaces?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_full_depth" })
  isFullDepth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=local_context_data" })
  localContextData?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer__n" })
  manufacturerN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id__n" })
  manufacturerIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__n" })
  modelN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pass_through_ports" })
  passThroughPorts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform__n" })
  platformN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id__n" })
  platformIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position__gt" })
  positionGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position__gte" })
  positionGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position__lt" })
  positionLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position__lte" })
  positionLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position__n" })
  positionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_outlets" })
  powerOutlets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_ports" })
  powerPorts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_group_id" })
  rackGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_group_id__n" })
  rackGroupIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rack_id__n" })
  rackIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" })
  regionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" })
  regionIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role__n" })
  roleN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id__n" })
  roleIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" })
  siteN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" })
  siteIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status__n" })
  statusN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant__n" })
  tenantN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group" })
  tenantGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" })
  tenantGroupN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" })
  tenantGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" })
  tenantGroupIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" })
  tenantIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_position" })
  vcPosition?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_position__gt" })
  vcPositionGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_position__gte" })
  vcPositionGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_position__lt" })
  vcPositionLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_position__lte" })
  vcPositionLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_position__n" })
  vcPositionN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_priority" })
  vcPriority?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_priority__gt" })
  vcPriorityGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_priority__gte" })
  vcPriorityGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_priority__lt" })
  vcPriorityLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_priority__lte" })
  vcPriorityLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vc_priority__n" })
  vcPriorityN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_id" })
  virtualChassisId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_id__n" })
  virtualChassisIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_member" })
  virtualChassisMember?: string;
}


export class DcimDevicesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceWithConfigContext })
  results: shared.DeviceWithConfigContext[];
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
