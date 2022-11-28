import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceTypesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" })
  idIn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_console_server" })
  isConsoleServer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_full_depth" })
  isFullDepth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_network_device" })
  isNetworkDevice?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_pdu" })
  isPdu?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" })
  manufacturerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_number" })
  partNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subdevice_role" })
  subdeviceRole?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=u_height" })
  uHeight?: number;
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
