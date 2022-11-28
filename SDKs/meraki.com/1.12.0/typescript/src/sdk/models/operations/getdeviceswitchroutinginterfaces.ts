import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceSwitchRoutingInterfacesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchRoutingInterfacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceSwitchRoutingInterfacesPathParams;
}


export class GetDeviceSwitchRoutingInterfacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceSwitchRoutingInterfaces200ApplicationJsonObject?: Map<string, any>;
}
