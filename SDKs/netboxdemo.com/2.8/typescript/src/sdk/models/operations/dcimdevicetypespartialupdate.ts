import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceTypesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceTypesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceTypesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceType;
}


export class DcimDeviceTypesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceType?: shared.DeviceType;

  @Metadata()
  statusCode: number;
}
