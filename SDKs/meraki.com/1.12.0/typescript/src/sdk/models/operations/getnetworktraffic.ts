import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkTrafficPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkTrafficDeviceTypeEnum {
    Combined = "combined"
,    Wireless = "wireless"
,    Switch = "switch"
,    Appliance = "appliance"
}


export class GetNetworkTrafficQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceType" })
  deviceType?: GetNetworkTrafficDeviceTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkTrafficRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkTrafficPathParams;

  @Metadata()
  queryParams: GetNetworkTrafficQueryParams;
}


export class GetNetworkTrafficResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkTraffic200ApplicationJsonObject?: Map<string, any>;
}
