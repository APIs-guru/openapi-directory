import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletTemplatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerOutletTemplate;
}


export class DcimPowerOutletTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutletTemplate?: shared.PowerOutletTemplate;

  @Metadata()
  statusCode: number;
}
