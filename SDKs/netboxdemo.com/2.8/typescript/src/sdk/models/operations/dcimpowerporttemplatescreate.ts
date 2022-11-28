import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerPortTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerPortTemplateInput;
}


export class DcimPowerPortTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerPortTemplate?: shared.PowerPortTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
