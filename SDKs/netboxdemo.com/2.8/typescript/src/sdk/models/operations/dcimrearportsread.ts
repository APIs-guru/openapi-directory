import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRearPortsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRearPortsReadPathParams;
}


export class DcimRearPortsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rearPort?: shared.RearPort;

  @Metadata()
  statusCode: number;
}
