import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConsoleServerPortTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortTemplatesReadPathParams;
}


export class DcimConsoleServerPortTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
