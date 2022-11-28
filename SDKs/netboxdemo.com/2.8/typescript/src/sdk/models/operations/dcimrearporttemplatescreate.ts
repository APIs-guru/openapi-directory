import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRearPortTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableRearPortTemplateInput;
}


export class DcimRearPortTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rearPortTemplate?: shared.RearPortTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
