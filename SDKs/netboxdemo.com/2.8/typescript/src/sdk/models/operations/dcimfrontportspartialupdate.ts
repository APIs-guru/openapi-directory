import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimFrontPortsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimFrontPortsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableFrontPort;
}


export class DcimFrontPortsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  frontPort?: shared.FrontPort;

  @Metadata()
  statusCode: number;
}
