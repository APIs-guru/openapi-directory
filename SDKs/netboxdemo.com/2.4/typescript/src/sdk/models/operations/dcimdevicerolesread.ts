import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceRolesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceRolesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceRolesReadPathParams;
}


export class DcimDeviceRolesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceRole?: shared.DeviceRole;

  @Metadata()
  statusCode: number;
}
