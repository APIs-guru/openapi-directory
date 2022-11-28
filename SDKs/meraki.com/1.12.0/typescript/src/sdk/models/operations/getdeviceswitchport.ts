import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceSwitchPortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceSwitchPortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceSwitchPortPathParams;
}


export class GetDeviceSwitchPortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceSwitchPort200ApplicationJsonObject?: Map<string, any>;
}
