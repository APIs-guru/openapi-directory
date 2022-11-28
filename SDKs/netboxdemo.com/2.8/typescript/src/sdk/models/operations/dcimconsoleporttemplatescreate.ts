import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsolePortTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePortTemplateInput;
}


export class DcimConsolePortTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consolePortTemplate?: shared.ConsolePortTemplate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
