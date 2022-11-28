import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimCablesPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimCablesPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimCablesPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableCableInput;
}


export class DcimCablesPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cable?: shared.Cable;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
