import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceTypesListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__ic" })
  modelIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__ie" })
  modelIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__iew" })
  modelIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__isw" })
  modelIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__n" })
  modelN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__nic" })
  modelNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__nie" })
  modelNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__niew" })
  modelNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model__nisw" })
  modelNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number" })
  partNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__ic" })
  partNumberIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__ie" })
  partNumberIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__iew" })
  partNumberIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__isw" })
  partNumberIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__n" })
  partNumberN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__nic" })
  partNumberNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__nie" })
  partNumberNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__niew" })
  partNumberNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number__nisw" })
  partNumberNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pass_through_ports" })
  passThroughPorts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_outlets" })
  powerOutlets?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=power_ports" })
  powerPorts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" })
  slugIc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" })
  slugIe?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" })
  slugIew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" })
  slugIsw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" })
  slugN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" })
  slugNic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" })
  slugNie?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" })
  slugNiew?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" })
  slugNisw?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subdevice_role" })
  subdeviceRole?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subdevice_role__n" })
  subdeviceRoleN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height" })
  uHeight?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__gt" })
  uHeightGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__gte" })
  uHeightGte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__lt" })
  uHeightLt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__lte" })
  uHeightLte?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height__n" })
  uHeightN?: string;
}


export class DcimDeviceTypesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceType })
  results: shared.DeviceType[];
}


export class DcimDeviceTypesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimDeviceTypesListQueryParams;
}


export class DcimDeviceTypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dcimDeviceTypesList200ApplicationJsonObject?: DcimDeviceTypesList200ApplicationJson;
}
