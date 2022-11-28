import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsoleServerPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimConsoleServerPortTemplatesPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsoleServerPortTemplateInput;
}


export class DcimConsoleServerPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
