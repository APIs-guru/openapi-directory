import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraAnalyticsLivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraAnalyticsLiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraAnalyticsLivePathParams;
}


export class GetDeviceCameraAnalyticsLiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraAnalyticsLive200ApplicationJsonObject?: Map<string, any>;
}
