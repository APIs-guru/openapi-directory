import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamIpAddressesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assigned_to_interface" })
  assignedToInterface?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__ic" })
  dnsNameIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__ie" })
  dnsNameIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__iew" })
  dnsNameIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__isw" })
  dnsNameIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__n" })
  dnsNameN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__nic" })
  dnsNameNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__nie" })
  dnsNameNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__niew" })
  dnsNameNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dns_name__nisw" })
  dnsNameNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: number;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interface" })
  interface?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interface__n" })
  interfaceN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interface_id" })
  interfaceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interface_id__n" })
  interfaceIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mask_length" })
  maskLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role__n" })
  roleN?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine" })
  virtualMachine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine__n" })
  virtualMachineN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id" })
  virtualMachineId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id__n" })
  virtualMachineIdN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrf" })
  vrf?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrf__n" })
  vrfN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrf_id" })
  vrfId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrf_id__n" })
  vrfIdN?: string;
}


export class IpamIpAddressesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.IpAddress })
  results: shared.IpAddress[];
}


export class IpamIpAddressesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: IpamIpAddressesListQueryParams;
}


export class IpamIpAddressesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipamIpAddressesList200ApplicationJsonObject?: IpamIpAddressesList200ApplicationJson;
}
