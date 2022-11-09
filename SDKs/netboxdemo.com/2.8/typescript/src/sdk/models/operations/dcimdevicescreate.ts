import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceWithConfigContext;
}


export class DcimDevicesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceWithConfigContext?: shared.DeviceWithConfigContext;

  @Metadata()
  statusCode: number;
}
