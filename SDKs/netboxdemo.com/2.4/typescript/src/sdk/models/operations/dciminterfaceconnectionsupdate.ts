import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceConnectionsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceConnectionsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfaceConnectionsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInterfaceConnection;
}


export class DcimInterfaceConnectionsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interfaceConnection?: shared.InterfaceConnection;

  @Metadata()
  statusCode: number;
}
