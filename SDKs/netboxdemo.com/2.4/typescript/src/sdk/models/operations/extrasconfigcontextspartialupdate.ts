import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasConfigContextsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasConfigContextsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasConfigContextsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConfigContext;
}


export class ExtrasConfigContextsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  configContext?: shared.ConfigContext;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
