import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceTypesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceType;
}


export class DcimDeviceTypesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceType?: shared.DeviceType;

  @Metadata()
  statusCode: number;
}
