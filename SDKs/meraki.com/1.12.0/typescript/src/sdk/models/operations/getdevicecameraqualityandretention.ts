import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCameraQualityAndRetentionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCameraQualityAndRetentionPathParams;
}


export class GetDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCameraQualityAndRetention200ApplicationJsonObject?: Map<string, any>;
}
