import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRearPortsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRearPort;
}


export class DcimRearPortsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rearPort?: shared.RearPort;

  @Metadata()
  statusCode: number;
}
