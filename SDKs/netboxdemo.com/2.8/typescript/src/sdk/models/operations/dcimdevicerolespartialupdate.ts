import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceRolesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceRolesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceRolesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeviceRole;
}


export class DcimDeviceRolesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceRole?: shared.DeviceRole;

  @Metadata()
  statusCode: number;
}
