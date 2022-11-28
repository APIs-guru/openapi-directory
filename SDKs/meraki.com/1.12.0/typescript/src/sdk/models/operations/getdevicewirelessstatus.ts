import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceWirelessStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceWirelessStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceWirelessStatusPathParams;
}


export class GetDeviceWirelessStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceWirelessStatus200ApplicationJsonObject?: Map<string, any>;
}
