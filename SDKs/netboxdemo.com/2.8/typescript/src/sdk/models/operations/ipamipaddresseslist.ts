import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamIpAddressesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=address" })
  address?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assigned_to_interface" })
  assignedToInterface?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created" })
  created?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__gte" })
  createdGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=created__lte" })
  createdLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_id" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name" })
  dnsName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__ic" })
  dnsNameIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__ie" })
  dnsNameIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__iew" })
  dnsNameIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__isw" })
  dnsNameIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__n" })
  dnsNameN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__nic" })
  dnsNameNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__nie" })
  dnsNameNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__niew" })
  dnsNameNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dns_name__nisw" })
  dnsNameNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=family" })
  family?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=interface" })
  interface?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interface__n" })
  interfaceN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interface_id" })
  interfaceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interface_id__n" })
  interfaceIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated" })
  lastUpdated?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__gte" })
  lastUpdatedGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_updated__lte" })
  lastUpdatedLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mask_length" })
  maskLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role__n" })
  roleN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine" })
  virtualMachine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine__n" })
  virtualMachineN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id" })
  virtualMachineId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id__n" })
  virtualMachineIdN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf" })
  vrf?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf__n" })
  vrfN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf_id" })
  vrfId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vrf_id__n" })
  vrfIdN?: string;
}


export class IpamIpAddressesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IpamIpAddressesListQueryParams;
}


export class IpamIpAddressesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.IpAddress })
  results: shared.IpAddress[];
}


export class IpamIpAddressesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipamIpAddressesList200ApplicationJsonObject?: IpamIpAddressesList200ApplicationJson;
}
