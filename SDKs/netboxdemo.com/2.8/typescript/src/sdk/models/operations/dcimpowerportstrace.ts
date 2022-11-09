import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPortsTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortsTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPortsTracePathParams;
}


export class DcimPowerPortsTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPort?: shared.PowerPort;

  @Metadata()
  statusCode: number;
}
