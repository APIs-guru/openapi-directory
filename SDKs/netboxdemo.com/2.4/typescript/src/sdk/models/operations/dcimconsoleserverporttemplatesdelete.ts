import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimConsoleServerPortTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsoleServerPortTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsoleServerPortTemplatesDeletePathParams;
}


export class DcimConsoleServerPortTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
