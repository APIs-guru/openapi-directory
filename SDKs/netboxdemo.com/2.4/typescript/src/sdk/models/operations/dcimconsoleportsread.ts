import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortsReadPathParams;
}


export class DcimConsolePortsReadResponse extends SpeakeasyBase {
  @Metadata()
  consolePort?: shared.ConsolePort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
