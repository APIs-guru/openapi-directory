import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchRoutingInterfacePathParams;
}


export class GetDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
