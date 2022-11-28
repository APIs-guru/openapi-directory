import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDevicePathParams;
}


export class GetDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDevice200ApplicationJsonObject?: Map<string, any>;
}
