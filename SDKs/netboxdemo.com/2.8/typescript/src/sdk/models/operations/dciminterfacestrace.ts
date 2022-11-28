import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfacesTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInterfacesTracePathParams;
}


export class DcimInterfacesTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceInterface?: shared.DeviceInterface;

  @SpeakeasyMetadata()
  statusCode: number;
}
