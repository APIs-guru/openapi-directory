import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRearPortsTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRearPortsTracePathParams;
}


export class DcimRearPortsTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rearPort?: shared.RearPort;

  @SpeakeasyMetadata()
  statusCode: number;
}
