import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BlinkDeviceLedsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class BlinkDeviceLedsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=duty" })
  duty?: number;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;
}


export class BlinkDeviceLedsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BlinkDeviceLedsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BlinkDeviceLedsRequestBody;
}


export class BlinkDeviceLedsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  blinkDeviceLeds202ApplicationJsonObject?: Map<string, any>;
}
