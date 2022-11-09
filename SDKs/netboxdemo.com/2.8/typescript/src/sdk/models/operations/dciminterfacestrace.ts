import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfacesTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfacesTracePathParams;
}


export class DcimInterfacesTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceInterface?: shared.DeviceInterface;

  @Metadata()
  statusCode: number;
}
