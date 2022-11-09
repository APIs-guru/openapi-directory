import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasConfigContextsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasConfigContextsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasConfigContextsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableConfigContext;
}


export class ExtrasConfigContextsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  configContext?: shared.ConfigContext;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
