import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceCameraVideoSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceCameraVideoSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalRtspEnabled" })
  externalRtspEnabled?: boolean;
}


export class UpdateDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceCameraVideoSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCameraVideoSettingsRequestBody;
}


export class UpdateDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceCameraVideoSettings200ApplicationJsonObject?: Map<string, any>;
}
