import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConsolePortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimConsolePortTemplatesPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePortTemplateInput;
}


export class DcimConsolePortTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consolePortTemplate?: shared.ConsolePortTemplate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
