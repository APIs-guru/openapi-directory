import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RebootDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class RebootDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RebootDevicePathParams;
}


export class RebootDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  rebootDevice202ApplicationJsonObject?: Map<string, any>;
}
