import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConsolePortTemplate;
}


export class DcimConsolePortTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  consolePortTemplate?: shared.ConsolePortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
