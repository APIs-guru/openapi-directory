import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPortsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPortsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerPort;
}


export class DcimPowerPortsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPort?: shared.PowerPort;

  @Metadata()
  statusCode: number;
}
