import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BlinkDeviceLedsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class BlinkDeviceLedsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=duty" })
  duty?: number;

  @Metadata({ data: "json, name=period" })
  period?: number;
}


export class BlinkDeviceLedsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BlinkDeviceLedsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BlinkDeviceLedsRequestBody;
}


export class BlinkDeviceLedsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  blinkDeviceLeds202ApplicationJsonObject?: Map<string, any>;
}
