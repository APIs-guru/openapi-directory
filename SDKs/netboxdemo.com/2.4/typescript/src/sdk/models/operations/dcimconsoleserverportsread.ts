import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortsReadPathParams;
}


export class DcimConsoleServerPortsReadResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
