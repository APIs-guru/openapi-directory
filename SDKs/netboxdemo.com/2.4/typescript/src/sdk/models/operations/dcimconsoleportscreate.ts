import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePort;
}


export class DcimConsolePortsCreateResponse extends SpeakeasyBase {
  @Metadata()
  consolePort?: shared.ConsolePort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
