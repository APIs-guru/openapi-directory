import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchPortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchPortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchPortPathParams;
}


export class GetDeviceSwitchPortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchPort200ApplicationJsonObject?: Map<string, any>;
}
