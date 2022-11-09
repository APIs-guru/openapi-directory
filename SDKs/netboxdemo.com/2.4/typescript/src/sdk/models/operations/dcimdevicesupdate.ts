import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDevicesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDevice;
}


export class DcimDevicesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  statusCode: number;
}
