import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletsReadPathParams;
}


export class DcimPowerOutletsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutlet?: shared.PowerOutlet;

  @Metadata()
  statusCode: number;
}
