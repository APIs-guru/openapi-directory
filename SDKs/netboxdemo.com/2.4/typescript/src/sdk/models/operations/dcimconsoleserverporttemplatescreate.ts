import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortTemplatesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPortTemplate;
}


export class DcimConsoleServerPortTemplatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
