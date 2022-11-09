import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRearPortTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRearPortTemplate;
}


export class DcimRearPortTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rearPortTemplate?: shared.RearPortTemplate;

  @Metadata()
  statusCode: number;
}
