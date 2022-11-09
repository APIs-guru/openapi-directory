import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortsTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortsTracePathParams;
}


export class DcimConsoleServerPortsTraceResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
