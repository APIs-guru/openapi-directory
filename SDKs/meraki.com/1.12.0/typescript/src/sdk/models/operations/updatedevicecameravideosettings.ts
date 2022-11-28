import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceCameraVideoSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceCameraVideoSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalRtspEnabled" })
  externalRtspEnabled?: boolean;
}


export class UpdateDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceCameraVideoSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCameraVideoSettingsRequestBody;
}


export class UpdateDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceCameraVideoSettings200ApplicationJsonObject?: Map<string, any>;
}
