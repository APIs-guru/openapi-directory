import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceTypesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceTypesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceTypesReadPathParams;
}


export class DcimDeviceTypesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceType?: shared.DeviceType;

  @Metadata()
  statusCode: number;
}
