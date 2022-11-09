import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRearPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortTemplatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRearPortTemplate;
}


export class DcimRearPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rearPortTemplate?: shared.RearPortTemplate;

  @Metadata()
  statusCode: number;
}
