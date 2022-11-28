import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerOutletsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerOutletsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerOutletInput;
}


export class DcimPowerOutletsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerOutlet?: shared.PowerOutlet;

  @SpeakeasyMetadata()
  statusCode: number;
}
