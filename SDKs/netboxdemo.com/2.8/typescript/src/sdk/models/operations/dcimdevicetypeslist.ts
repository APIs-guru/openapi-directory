import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceTypesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__ic" })
  modelIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__ie" })
  modelIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__iew" })
  modelIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__isw" })
  modelIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__n" })
  modelN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__nic" })
  modelNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__nie" })
  modelNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__niew" })
  modelNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model__nisw" })
  modelNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number" })
  partNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__ic" })
  partNumberIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__ie" })
  partNumberIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__iew" })
  partNumberIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__isw" })
  partNumberIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__n" })
  partNumberN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__nic" })
  partNumberNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__nie" })
  partNumberNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__niew" })
  partNumberNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number__nisw" })
  partNumberNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pass_through_ports" })
  passThroughPorts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=power_outlets" })
  powerOutlets?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=power_ports" })
  powerPorts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__ic" })
  slugIc?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__ie" })
  slugIe?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__iew" })
  slugIew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__isw" })
  slugIsw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__n" })
  slugN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__nic" })
  slugNic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__nie" })
  slugNie?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__niew" })
  slugNiew?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" })
  slugNisw?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subdevice_role" })
  subdeviceRole?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subdevice_role__n" })
  subdeviceRoleN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag__n" })
  tagN?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height" })
  uHeight?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height__gt" })
  uHeightGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height__gte" })
  uHeightGte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height__lt" })
  uHeightLt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height__lte" })
  uHeightLte?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height__n" })
  uHeightN?: string;
}


export class DcimDeviceTypesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimDeviceTypesListQueryParams;
}


export class DcimDeviceTypesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.DeviceType })
  results: shared.DeviceType[];
}


export class DcimDeviceTypesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dcimDeviceTypesList200ApplicationJsonObject?: DcimDeviceTypesList200ApplicationJson;
}
