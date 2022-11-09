import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsolePortTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortTemplatesReadPathParams;
}


export class DcimConsolePortTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  consolePortTemplate?: shared.ConsolePortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
