import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfaceConnectionsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceConnectionsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfaceConnectionsReadPathParams;
}


export class DcimInterfaceConnectionsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interfaceConnection?: shared.InterfaceConnection;

  @Metadata()
  statusCode: number;
}
