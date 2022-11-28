import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceCameraAnalyticsZonesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceCameraAnalyticsZonesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceCameraAnalyticsZonesPathParams;
}


export class GetDeviceCameraAnalyticsZonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceCameraAnalyticsZones200ApplicationJsonObject?: Map<string, any>;
}
