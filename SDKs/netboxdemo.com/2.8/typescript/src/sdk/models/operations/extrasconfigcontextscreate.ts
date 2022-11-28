import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasConfigContextsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableConfigContextInput;
}


export class ExtrasConfigContextsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  configContext?: shared.ConfigContext;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
