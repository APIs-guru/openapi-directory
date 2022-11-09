import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceLossAndLatencyHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum GetDeviceLossAndLatencyHistoryUplinkEnum {
    Wan1 = "wan1"
,    Wan2 = "wan2"
,    Cellular = "cellular"
}


export class GetDeviceLossAndLatencyHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uplink" })
  uplink?: GetDeviceLossAndLatencyHistoryUplinkEnum;
}


export class GetDeviceLossAndLatencyHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceLossAndLatencyHistoryPathParams;

  @Metadata()
  queryParams: GetDeviceLossAndLatencyHistoryQueryParams;
}


export class GetDeviceLossAndLatencyHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceLossAndLatencyHistory200ApplicationJsonObject?: Map<string, any>;
}
