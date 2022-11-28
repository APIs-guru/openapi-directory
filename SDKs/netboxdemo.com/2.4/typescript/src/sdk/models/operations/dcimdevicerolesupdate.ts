import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceRolesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceRolesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDeviceRolesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeviceRoleInput;
}


export class DcimDeviceRolesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceRole?: shared.DeviceRole;

  @SpeakeasyMetadata()
  statusCode: number;
}
