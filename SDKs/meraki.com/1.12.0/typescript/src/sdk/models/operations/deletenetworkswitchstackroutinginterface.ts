import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class DeleteNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSwitchStackRoutingInterfacePathParams;
}


export class DeleteNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
