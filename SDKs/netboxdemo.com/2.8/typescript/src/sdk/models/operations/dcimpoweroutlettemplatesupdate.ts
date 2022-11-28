import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerOutletTemplatesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletTemplatesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerOutletTemplatesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerOutletTemplateInput;
}


export class DcimPowerOutletTemplatesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerOutletTemplate?: shared.PowerOutletTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
