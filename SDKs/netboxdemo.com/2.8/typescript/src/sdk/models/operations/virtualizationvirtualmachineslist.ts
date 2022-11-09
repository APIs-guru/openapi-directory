import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationVirtualMachinesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster" })
  cluster?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster__n" })
  clusterN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_group" })
  clusterGroup?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_group__n" })
  clusterGroupN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id" })
  clusterGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_group_id__n" })
  clusterGroupIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_id" })
  clusterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_id__n" })
  clusterIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_type" })
  clusterType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_type__n" })
  clusterTypeN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id" })
  clusterTypeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cluster_type_id__n" })
  clusterTypeIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disk" })
  disk?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disk__gt" })
  diskGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disk__gte" })
  diskGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disk__lt" })
  diskLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disk__lte" })
  diskLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=disk__n" })
  diskN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=memory" })
  memory?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=memory__gt" })
  memoryGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=memory__gte" })
  memoryGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=memory__lt" })
  memoryLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=memory__lte" })
  memoryLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=memory__n" })
  memoryN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform__n" })
  platformN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform_id" })
  platformId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platform_id__n" })
  platformIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=vcpus" })
  vcpus?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vcpus__gt" })
  vcpusGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vcpus__gte" })
  vcpusGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vcpus__lt" })
  vcpusLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vcpus__lte" })
  vcpusLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vcpus__n" })
  vcpusN?: string;
}


export class VirtualizationVirtualMachinesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VirtualizationVirtualMachinesListQueryParams;
}


export class VirtualizationVirtualMachinesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.VirtualMachineWithConfigContext })
  results: shared.VirtualMachineWithConfigContext[];
}


export class VirtualizationVirtualMachinesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualizationVirtualMachinesList200ApplicationJsonObject?: VirtualizationVirtualMachinesList200ApplicationJson;
}
