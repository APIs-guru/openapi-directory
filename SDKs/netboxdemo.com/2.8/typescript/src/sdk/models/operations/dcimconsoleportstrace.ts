import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortsTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortsTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortsTracePathParams;
}


export class DcimConsolePortsTraceResponse extends SpeakeasyBase {
  @Metadata()
  consolePort?: shared.ConsolePort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
