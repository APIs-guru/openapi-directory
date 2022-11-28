import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRearPortsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRearPortsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRearPortsReadPathParams;
}


export class DcimRearPortsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rearPort?: shared.RearPort;

  @SpeakeasyMetadata()
  statusCode: number;
}
