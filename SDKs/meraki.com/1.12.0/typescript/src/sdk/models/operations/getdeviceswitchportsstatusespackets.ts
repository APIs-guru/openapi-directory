import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchPortsStatusesPacketsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchPortsStatusesPacketsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceSwitchPortsStatusesPacketsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchPortsStatusesPacketsPathParams;

  @Metadata()
  queryParams: GetDeviceSwitchPortsStatusesPacketsQueryParams;
}


export class GetDeviceSwitchPortsStatusesPacketsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchPortsStatusesPackets200ApplicationJsonObject?: Map<string, any>;
}
