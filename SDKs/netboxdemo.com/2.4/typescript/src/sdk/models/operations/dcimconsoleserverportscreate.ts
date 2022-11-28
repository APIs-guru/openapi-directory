import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsoleServerPortsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPortInput;
}


export class DcimConsoleServerPortsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
