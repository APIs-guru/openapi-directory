import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceConnectionsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceConnectionsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfaceConnectionsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInterfaceConnection;
}


export class DcimInterfaceConnectionsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interfaceConnection?: shared.InterfaceConnection;

  @Metadata()
  statusCode: number;
}
