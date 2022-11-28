import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerPortsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerPortsReadPathParams;
}


export class DcimPowerPortsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerPort?: shared.PowerPort;

  @SpeakeasyMetadata()
  statusCode: number;
}
