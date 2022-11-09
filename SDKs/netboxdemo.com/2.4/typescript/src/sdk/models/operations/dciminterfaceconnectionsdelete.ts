import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimInterfaceConnectionsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfaceConnectionsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfaceConnectionsDeletePathParams;
}


export class DcimInterfaceConnectionsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
