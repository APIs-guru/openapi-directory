import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" })
  interfaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class DeleteDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDeviceSwitchRoutingInterfacePathParams;
}


export class DeleteDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
