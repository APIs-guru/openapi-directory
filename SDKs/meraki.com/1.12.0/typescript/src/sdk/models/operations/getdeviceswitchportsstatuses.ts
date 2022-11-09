import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchPortsStatusesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchPortsStatusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetDeviceSwitchPortsStatusesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchPortsStatusesPathParams;

  @Metadata()
  queryParams: GetDeviceSwitchPortsStatusesQueryParams;
}


export class GetDeviceSwitchPortsStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchPortsStatuses200ApplicationJsonObject?: Map<string, any>;
}
