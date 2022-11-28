import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsolePortsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimConsolePortsReadPathParams;
}


export class DcimConsolePortsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consolePort?: shared.ConsolePort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
