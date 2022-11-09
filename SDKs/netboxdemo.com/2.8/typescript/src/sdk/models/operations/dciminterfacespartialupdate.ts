import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfacesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfacesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceInterface;
}


export class DcimInterfacesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceInterface?: shared.DeviceInterface;

  @Metadata()
  statusCode: number;
}
