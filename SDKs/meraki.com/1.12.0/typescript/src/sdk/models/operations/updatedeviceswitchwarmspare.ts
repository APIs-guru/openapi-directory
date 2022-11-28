import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceSwitchWarmSparePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceSwitchWarmSpareRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=spareSerial" })
  spareSerial?: string;
}


export class UpdateDeviceSwitchWarmSpareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceSwitchWarmSparePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDeviceSwitchWarmSpareRequestBody;
}


export class UpdateDeviceSwitchWarmSpareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceSwitchWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
