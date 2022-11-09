import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePort;
}


export class DcimConsolePortsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consolePort?: shared.ConsolePort;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
