import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class GetNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchStackRoutingInterfacePathParams;
}


export class GetNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchStackRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
