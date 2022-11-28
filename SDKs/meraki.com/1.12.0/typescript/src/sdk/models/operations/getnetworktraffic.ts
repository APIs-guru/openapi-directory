import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkTrafficPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum GetNetworkTrafficDeviceTypeEnum {
    Combined = "combined",
    Wireless = "wireless",
    Switch = "switch",
    Appliance = "appliance"
}


export class GetNetworkTrafficQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceType" })
  deviceType?: GetNetworkTrafficDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkTrafficRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkTrafficPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkTrafficQueryParams;
}


export class GetNetworkTrafficResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkTraffic200ApplicationJsonObject?: Map<string, any>;
}
