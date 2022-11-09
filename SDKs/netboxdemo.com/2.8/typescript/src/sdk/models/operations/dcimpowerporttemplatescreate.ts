import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPortTemplatesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerPortTemplate;
}


export class DcimPowerPortTemplatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPortTemplate?: shared.PowerPortTemplate;

  @Metadata()
  statusCode: number;
}
