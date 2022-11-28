import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimFrontPortsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimFrontPortsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimFrontPortsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableFrontPortInput;
}


export class DcimFrontPortsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  frontPort?: shared.FrontPort;

  @SpeakeasyMetadata()
  statusCode: number;
}
