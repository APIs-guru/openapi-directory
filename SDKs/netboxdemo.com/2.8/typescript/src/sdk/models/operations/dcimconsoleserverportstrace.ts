import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsoleServerPortsTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortsTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimConsoleServerPortsTracePathParams;
}


export class DcimConsoleServerPortsTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consoleServerPort?: shared.ConsoleServerPort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
