import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletsTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletsTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletsTracePathParams;
}


export class DcimPowerOutletsTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutlet?: shared.PowerOutlet;

  @Metadata()
  statusCode: number;
}
