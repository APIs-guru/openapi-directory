import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasImageAttachmentsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasImageAttachmentsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImageAttachment;
}


export class ExtrasImageAttachmentsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageAttachment?: shared.ImageAttachment;

  @Metadata()
  statusCode: number;
}
