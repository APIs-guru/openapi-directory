import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPort;
}


export class DcimConsoleServerPortsCreateResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
