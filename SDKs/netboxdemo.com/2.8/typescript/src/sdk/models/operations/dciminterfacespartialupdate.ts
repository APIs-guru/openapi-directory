import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfacesPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInterfacesPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceInterfaceInput;
}


export class DcimInterfacesPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceInterface?: shared.DeviceInterface;

  @SpeakeasyMetadata()
  statusCode: number;
}
