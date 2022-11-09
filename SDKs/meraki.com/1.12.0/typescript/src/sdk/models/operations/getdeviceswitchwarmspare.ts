import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchWarmSparePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchWarmSpareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchWarmSparePathParams;
}


export class GetDeviceSwitchWarmSpareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
