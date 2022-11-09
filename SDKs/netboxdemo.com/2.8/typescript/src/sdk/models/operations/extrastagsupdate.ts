import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasTagsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTagsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasTagsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Tag;
}


export class ExtrasTagsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
