import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasImageAttachmentsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImageAttachment;
}


export class ExtrasImageAttachmentsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageAttachment?: shared.ImageAttachment;

  @Metadata()
  statusCode: number;
}
