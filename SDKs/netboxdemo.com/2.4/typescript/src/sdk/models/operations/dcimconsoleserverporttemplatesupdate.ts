import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPortTemplate;
}


export class DcimConsoleServerPortTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
