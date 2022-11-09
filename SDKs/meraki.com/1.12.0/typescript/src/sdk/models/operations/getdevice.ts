import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDevicePathParams;
}


export class GetDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDevice200ApplicationJsonObject?: Map<string, any>;
}
