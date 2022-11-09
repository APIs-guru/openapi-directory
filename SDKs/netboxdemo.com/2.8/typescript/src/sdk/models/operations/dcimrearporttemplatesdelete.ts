import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimRearPortTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortTemplatesDeletePathParams;
}


export class DcimRearPortTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
