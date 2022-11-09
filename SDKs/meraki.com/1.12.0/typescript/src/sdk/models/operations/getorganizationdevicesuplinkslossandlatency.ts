import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationDevicesUplinksLossAndLatencyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum {
    Wan1 = "wan1"
,    Wan2 = "wan2"
,    Cellular = "cellular"
}


export class GetOrganizationDevicesUplinksLossAndLatencyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uplink" })
  uplink?: GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
}


export class GetOrganizationDevicesUplinksLossAndLatencyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrganizationDevicesUplinksLossAndLatencyPathParams;

  @Metadata()
  queryParams: GetOrganizationDevicesUplinksLossAndLatencyQueryParams;
}


export class GetOrganizationDevicesUplinksLossAndLatencyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizationDevicesUplinksLossAndLatency200ApplicationJsonObject?: Map<string, any>;
}
