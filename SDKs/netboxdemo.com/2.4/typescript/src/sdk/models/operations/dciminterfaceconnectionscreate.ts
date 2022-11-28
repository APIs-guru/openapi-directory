import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInterfaceConnectionsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableInterfaceConnectionInput;
}


export class DcimInterfaceConnectionsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  interfaceConnection?: shared.InterfaceConnection;

  @SpeakeasyMetadata()
  statusCode: number;
}
