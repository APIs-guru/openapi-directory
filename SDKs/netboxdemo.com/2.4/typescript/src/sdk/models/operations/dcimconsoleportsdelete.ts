import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimConsolePortsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortsDeletePathParams;
}


export class DcimConsolePortsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
