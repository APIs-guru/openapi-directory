import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceConnectionsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInterfaceConnection;
}


export class DcimInterfaceConnectionsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interfaceConnection?: shared.InterfaceConnection;

  @Metadata()
  statusCode: number;
}
