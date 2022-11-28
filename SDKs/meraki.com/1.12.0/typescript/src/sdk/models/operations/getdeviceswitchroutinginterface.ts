import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceSwitchRoutingInterfacePathParams;
}


export class GetDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceSwitchRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
