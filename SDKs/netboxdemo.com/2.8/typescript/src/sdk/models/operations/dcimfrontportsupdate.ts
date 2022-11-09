import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimFrontPortsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableFrontPort;
}


export class DcimFrontPortsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  frontPort?: shared.FrontPort;

  @Metadata()
  statusCode: number;
}
