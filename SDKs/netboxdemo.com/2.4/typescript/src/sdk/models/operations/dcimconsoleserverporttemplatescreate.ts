import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsoleServerPortTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPortTemplateInput;
}


export class DcimConsoleServerPortTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
