import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPort;
}


export class DcimConsoleServerPortsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
