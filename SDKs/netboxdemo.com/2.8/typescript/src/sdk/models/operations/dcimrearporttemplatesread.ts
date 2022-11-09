import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRearPortTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortTemplatesReadPathParams;
}


export class DcimRearPortTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rearPortTemplate?: shared.RearPortTemplate;

  @Metadata()
  statusCode: number;
}
