import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceSwitchWarmSparePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceSwitchWarmSpareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=spareSerial" })
  spareSerial?: string;
}


export class UpdateDeviceSwitchWarmSpareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceSwitchWarmSparePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDeviceSwitchWarmSpareRequestBody;
}


export class UpdateDeviceSwitchWarmSpareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceSwitchWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
