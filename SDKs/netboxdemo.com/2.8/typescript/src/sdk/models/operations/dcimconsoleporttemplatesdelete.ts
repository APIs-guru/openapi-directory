import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimConsolePortTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimConsolePortTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimConsolePortTemplatesDeletePathParams;
}


export class DcimConsolePortTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
