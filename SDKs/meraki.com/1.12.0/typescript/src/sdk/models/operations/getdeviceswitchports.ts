import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceSwitchPortsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchPortsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceSwitchPortsPathParams;
}


export class GetDeviceSwitchPortsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceSwitchPorts200ApplicationJsonObject?: Map<string, any>;
}
