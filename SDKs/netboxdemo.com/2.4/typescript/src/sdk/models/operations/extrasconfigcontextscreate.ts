import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasConfigContextsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConfigContext;
}


export class ExtrasConfigContextsCreateResponse extends SpeakeasyBase {
  @Metadata()
  configContext?: shared.ConfigContext;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
