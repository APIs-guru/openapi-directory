import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraQualityAndRetentionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraQualityAndRetentionPathParams;
}


export class GetDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraQualityAndRetention200ApplicationJsonObject?: Map<string, any>;
}
