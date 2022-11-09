import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchRoutingInterfacesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchRoutingInterfacesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchRoutingInterfacesPathParams;
}


export class GetDeviceSwitchRoutingInterfacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchRoutingInterfaces200ApplicationJsonObject?: Map<string, any>;
}
