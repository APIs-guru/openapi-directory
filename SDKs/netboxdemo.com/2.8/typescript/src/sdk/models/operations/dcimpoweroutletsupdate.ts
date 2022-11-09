import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerOutlet;
}


export class DcimPowerOutletsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutlet?: shared.PowerOutlet;

  @Metadata()
  statusCode: number;
}
