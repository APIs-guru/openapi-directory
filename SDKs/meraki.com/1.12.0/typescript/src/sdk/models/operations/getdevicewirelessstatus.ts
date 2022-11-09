import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceWirelessStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceWirelessStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceWirelessStatusPathParams;
}


export class GetDeviceWirelessStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceWirelessStatus200ApplicationJsonObject?: Map<string, any>;
}
