import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerOutlet;
}


export class DcimPowerOutletsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutlet?: shared.PowerOutlet;

  @Metadata()
  statusCode: number;
}
