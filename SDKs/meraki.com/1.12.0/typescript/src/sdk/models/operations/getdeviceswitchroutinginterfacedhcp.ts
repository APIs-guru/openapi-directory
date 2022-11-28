import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceSwitchRoutingInterfaceDhcpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchRoutingInterfaceDhcpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceSwitchRoutingInterfaceDhcpPathParams;
}


export class GetDeviceSwitchRoutingInterfaceDhcpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject?: Map<string, any>;
}
