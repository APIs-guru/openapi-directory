import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasImageAttachmentsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImageAttachmentInput;
}


export class ExtrasImageAttachmentsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageAttachment?: shared.ImageAttachment;

  @SpeakeasyMetadata()
  statusCode: number;
}
