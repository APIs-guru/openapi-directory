import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceCameraAnalyticsZonesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraAnalyticsZonesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceCameraAnalyticsZonesPathParams;
}


export class GetDeviceCameraAnalyticsZonesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceCameraAnalyticsZones200ApplicationJsonObject?: Map<string, any>;
}
