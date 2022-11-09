import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraVideoSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraVideoSettingsPathParams;
}


export class GetDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraVideoSettings200ApplicationJsonObject?: Map<string, any>;
}
