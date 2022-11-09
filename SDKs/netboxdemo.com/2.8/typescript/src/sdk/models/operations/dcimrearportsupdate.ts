import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRearPortsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRearPort;
}


export class DcimRearPortsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rearPort?: shared.RearPort;

  @Metadata()
  statusCode: number;
}
