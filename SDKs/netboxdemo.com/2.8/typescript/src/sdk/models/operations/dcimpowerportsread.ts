import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPortsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPortsReadPathParams;
}


export class DcimPowerPortsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPort?: shared.PowerPort;

  @Metadata()
  statusCode: number;
}
