import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasGraphsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasGraphsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasGraphsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Graph;
}


export class ExtrasGraphsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  graph?: shared.Graph;

  @Metadata()
  statusCode: number;
}
