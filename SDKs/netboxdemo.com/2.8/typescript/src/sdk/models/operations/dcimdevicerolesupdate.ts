import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceRolesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceRolesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceRolesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeviceRole;
}


export class DcimDeviceRolesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceRole?: shared.DeviceRole;

  @Metadata()
  statusCode: number;
}
