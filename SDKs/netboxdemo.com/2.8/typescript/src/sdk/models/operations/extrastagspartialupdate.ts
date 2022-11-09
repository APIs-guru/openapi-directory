import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasTagsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasTagsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasTagsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Tag;
}


export class ExtrasTagsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
