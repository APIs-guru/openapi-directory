import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ic" })
  assetTagIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ie" })
  assetTagIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__iew" })
  assetTagIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__isw" })
  assetTagIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__n" })
  assetTagN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nic" })
  assetTagNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nie" })
  assetTagNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__niew" })
  assetTagNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nisw" })
  assetTagNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_id__n" })
  clusterIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=console_ports" })
  consolePorts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=console_server_ports" })
  consoleServerPorts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_bays" })
  deviceBays?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_type_id" })
  deviceTypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_type_id__n" })
  deviceTypeIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=face" })
  face?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=face__n" })
  faceN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_primary_ip" })
  hasPrimaryIp?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=interfaces" })
  interfaces?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_full_depth" })
  isFullDepth?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=local_context_data" })
  localContextData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__ic" })
  macAddressIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__ie" })
  macAddressIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__iew" })
  macAddressIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__isw" })
  macAddressIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__n" })
  macAddressN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__nic" })
  macAddressNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__nie" })
  macAddressNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__niew" })
  macAddressNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mac_address__nisw" })
  macAddressNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer__n" })
  manufacturerN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id__n" })
  manufacturerIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__n" })
  modelN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ic" })
  nameIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__ie" })
  nameIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__iew" })
  nameIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__isw" })
  nameIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__n" })
  nameN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nic" })
  nameNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nie" })
  nameNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__niew" })
  nameNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name__nisw" })
  nameNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pass_through_ports" })
  passThroughPorts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform__n" })
  platformN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform_id__n" })
  platformIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position__gt" })
  positionGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position__gte" })
  positionGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position__lt" })
  positionLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position__lte" })
  positionLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position__n" })
  positionN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=power_outlets" })
  powerOutlets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=power_ports" })
  powerPorts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_group_id" })
  rackGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_group_id__n" })
  rackGroupIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_id" })
  rackId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rack_id__n" })
  rackIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region__n" })
  regionN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region_id" })
  regionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region_id__n" })
  regionIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role__n" })
  roleN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role_id__n" })
  roleIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serial" })
  serial?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site__n" })
  siteN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site_id__n" })
  siteIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status__n" })
  statusN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant" })
  tenant?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant__n" })
  tenantN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group" })
  tenantGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group__n" })
  tenantGroupN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id" })
  tenantGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_group_id__n" })
  tenantGroupIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
  tenantId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tenant_id__n" })
  tenantIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_position" })
  vcPosition?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_position__gt" })
  vcPositionGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_position__gte" })
  vcPositionGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_position__lt" })
  vcPositionLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_position__lte" })
  vcPositionLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_position__n" })
  vcPositionN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_priority" })
  vcPriority?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_priority__gt" })
  vcPriorityGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_priority__gte" })
  vcPriorityGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_priority__lt" })
  vcPriorityLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_priority__lte" })
  vcPriorityLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vc_priority__n" })
  vcPriorityN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_id" })
  virtualChassisId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_id__n" })
  virtualChassisIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_chassis_member" })
  virtualChassisMember?: string;
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

  @Metadata({ data: "json, name=results", elemType: shared.DeviceWithConfigContext })
  results: shared.DeviceWithConfigContext[];
}


export class DcimDevicesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimDevicesList200ApplicationJsonObject?: DcimDevicesList200ApplicationJson;
}
