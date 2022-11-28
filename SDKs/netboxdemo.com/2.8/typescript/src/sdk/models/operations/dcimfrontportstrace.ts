import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimFrontPortsTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimFrontPortsTracePathParams;
}


export class DcimFrontPortsTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  frontPort?: shared.FrontPort;

  @SpeakeasyMetadata()
  statusCode: number;
}
