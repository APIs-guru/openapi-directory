import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceRolesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceRolesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDeviceRolesReadPathParams;
}


export class DcimDeviceRolesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceRole?: shared.DeviceRole;

  @SpeakeasyMetadata()
  statusCode: number;
}
