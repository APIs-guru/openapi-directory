import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerOutletTemplate;
}


export class DcimPowerOutletTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutletTemplate?: shared.PowerOutletTemplate;

  @Metadata()
  statusCode: number;
}
