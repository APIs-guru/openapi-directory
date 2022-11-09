import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDevicesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceWithConfigContext;
}


export class DcimDevicesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceWithConfigContext?: shared.DeviceWithConfigContext;

  @Metadata()
  statusCode: number;
}
