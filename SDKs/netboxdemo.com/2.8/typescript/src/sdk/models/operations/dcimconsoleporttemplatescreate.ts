import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortTemplatesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePortTemplate;
}


export class DcimConsolePortTemplatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  consolePortTemplate?: shared.ConsolePortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
