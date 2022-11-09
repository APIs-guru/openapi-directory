import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPort;
}


export class DcimConsoleServerPortsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
