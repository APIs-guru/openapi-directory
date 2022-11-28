import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDevicesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDevicesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceWithConfigContextInput;
}


export class DcimDevicesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceWithConfigContext?: shared.DeviceWithConfigContext;

  @SpeakeasyMetadata()
  statusCode: number;
}
