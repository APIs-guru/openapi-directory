import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrganizationDevicesUplinksLossAndLatencyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2",
    Cellular = "cellular"
}


export class GetOrganizationDevicesUplinksLossAndLatencyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uplink" })
  uplink?: GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
}


export class GetOrganizationDevicesUplinksLossAndLatencyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrganizationDevicesUplinksLossAndLatencyPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrganizationDevicesUplinksLossAndLatencyQueryParams;
}


export class GetOrganizationDevicesUplinksLossAndLatencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getOrganizationDevicesUplinksLossAndLatency200ApplicationJsonObject?: Map<string, any>;
}
