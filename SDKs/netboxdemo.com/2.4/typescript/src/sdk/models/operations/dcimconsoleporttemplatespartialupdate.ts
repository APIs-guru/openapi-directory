import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortTemplatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePortTemplate;
}


export class DcimConsolePortTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consolePortTemplate?: shared.ConsolePortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
