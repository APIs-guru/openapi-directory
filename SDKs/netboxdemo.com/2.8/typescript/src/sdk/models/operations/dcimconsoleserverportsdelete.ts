import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimConsoleServerPortsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortsDeletePathParams;
}


export class DcimConsoleServerPortsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
