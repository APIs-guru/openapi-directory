import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationVirtualMachinesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster__n" })
  clusterN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group" })
  clusterGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group__n" })
  clusterGroupN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id" })
  clusterGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id__n" })
  clusterGroupIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_id__n" })
  clusterIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type" })
  clusterType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type__n" })
  clusterTypeN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id" })
  clusterTypeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id__n" })
  clusterTypeIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk" })
  disk?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__gt" })
  diskGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__gte" })
  diskGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__lt" })
  diskLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__lte" })
  diskLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=disk__n" })
  diskN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__gt" })
  memoryGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__gte" })
  memoryGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__lt" })
  memoryLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__lte" })
  memoryLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memory__n" })
  memoryN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform__n" })
  platformN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform_id__n" })
  platformIdN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role__n" })
  roleN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id__n" })
  roleIdN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus" })
  vcpus?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__gt" })
  vcpusGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__gte" })
  vcpusGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__lt" })
  vcpusLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__lte" })
  vcpusLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vcpus__n" })
  vcpusN?: string;
}


export class VirtualizationVirtualMachinesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualMachineWithConfigContext })
  results: shared.VirtualMachineWithConfigContext[];
}


export class VirtualizationVirtualMachinesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VirtualizationVirtualMachinesListQueryParams;
}


export class VirtualizationVirtualMachinesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  virtualizationVirtualMachinesList200ApplicationJsonObject?: VirtualizationVirtualMachinesList200ApplicationJson;
}
