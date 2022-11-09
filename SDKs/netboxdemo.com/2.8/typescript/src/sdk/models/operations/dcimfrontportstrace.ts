import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimFrontPortsTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortsTracePathParams;
}


export class DcimFrontPortsTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  frontPort?: shared.FrontPort;

  @Metadata()
  statusCode: number;
}
