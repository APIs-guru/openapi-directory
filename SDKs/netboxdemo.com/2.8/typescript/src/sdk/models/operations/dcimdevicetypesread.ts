import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceTypesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceTypesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDeviceTypesReadPathParams;
}


export class DcimDeviceTypesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceType?: shared.DeviceType;

  @SpeakeasyMetadata()
  statusCode: number;
}
