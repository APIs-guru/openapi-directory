import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRearPortsTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortsTracePathParams;
}


export class DcimRearPortsTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rearPort?: shared.RearPort;

  @Metadata()
  statusCode: number;
}
