import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VirtualizationInterfacesListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine" })
  virtualMachine?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine__n" })
  virtualMachineN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id" })
  virtualMachineId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=virtual_machine_id__n" })
  virtualMachineIdN?: string;
}


export class VirtualizationInterfacesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.VirtualMachineInterface })
  results: shared.VirtualMachineInterface[];
}


export class VirtualizationInterfacesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VirtualizationInterfacesListQueryParams;
}


export class VirtualizationInterfacesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  virtualizationInterfacesList200ApplicationJsonObject?: VirtualizationInterfacesList200ApplicationJson;
}
