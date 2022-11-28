import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceLossAndLatencyHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceLossAndLatencyHistoryUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2",
    Cellular = "cellular"
}


export class GetDeviceLossAndLatencyHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uplink" })
  uplink?: GetDeviceLossAndLatencyHistoryUplinkEnum;
}


export class GetDeviceLossAndLatencyHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceLossAndLatencyHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceLossAndLatencyHistoryQueryParams;
}


export class GetDeviceLossAndLatencyHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceLossAndLatencyHistory200ApplicationJsonObject?: Map<string, any>;
}
