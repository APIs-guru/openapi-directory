import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceTypesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_console_server" })
  isConsoleServer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_full_depth" })
  isFullDepth?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_network_device" })
  isNetworkDevice?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_pdu" })
  isPdu?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=part_number" })
  partNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subdevice_role" })
  subdeviceRole?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=u_height" })
  uHeight?: number;
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
