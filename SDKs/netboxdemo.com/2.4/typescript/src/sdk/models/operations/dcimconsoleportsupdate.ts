import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePort;
}


export class DcimConsolePortsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consolePort?: shared.ConsolePort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
