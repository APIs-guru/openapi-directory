import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchStackRoutingInterfacesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class GetNetworkSwitchStackRoutingInterfacesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchStackRoutingInterfacesPathParams;
}


export class GetNetworkSwitchStackRoutingInterfacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchStackRoutingInterfaces200ApplicationJsonObject?: Map<string, any>;
}
