import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerOutlet;
}


export class DcimPowerOutletsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutlet?: shared.PowerOutlet;

  @Metadata()
  statusCode: number;
}
