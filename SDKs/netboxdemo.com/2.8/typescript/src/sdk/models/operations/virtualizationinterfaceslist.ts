import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationInterfacesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=mtu" })
  mtu?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mtu__gt" })
  mtuGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mtu__gte" })
  mtuGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mtu__lt" })
  mtuLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mtu__lte" })
  mtuLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mtu__n" })
  mtuN?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine" })
  virtualMachine?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine__n" })
  virtualMachineN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id" })
  virtualMachineId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id__n" })
  virtualMachineIdN?: string;
}


export class VirtualizationInterfacesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VirtualizationInterfacesListQueryParams;
}


export class VirtualizationInterfacesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.VirtualMachineInterface })
  results: shared.VirtualMachineInterface[];
}


export class VirtualizationInterfacesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualizationInterfacesList200ApplicationJsonObject?: VirtualizationInterfacesList200ApplicationJson;
}
