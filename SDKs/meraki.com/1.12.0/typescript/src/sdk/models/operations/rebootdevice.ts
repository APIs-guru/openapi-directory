import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RebootDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class RebootDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RebootDevicePathParams;
}


export class RebootDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rebootDevice202ApplicationJsonObject?: Map<string, any>;
}
