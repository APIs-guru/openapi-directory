import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortTemplatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPortTemplate;
}


export class DcimConsoleServerPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
