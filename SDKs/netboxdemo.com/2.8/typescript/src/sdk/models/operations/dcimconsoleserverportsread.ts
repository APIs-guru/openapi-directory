import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsoleServerPortsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimConsoleServerPortsReadPathParams;
}


export class DcimConsoleServerPortsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
