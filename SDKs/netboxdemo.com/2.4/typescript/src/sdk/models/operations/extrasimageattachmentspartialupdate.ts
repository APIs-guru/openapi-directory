import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasImageAttachmentsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasImageAttachmentsPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImageAttachmentInput;
}


export class ExtrasImageAttachmentsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageAttachment?: shared.ImageAttachment;

  @SpeakeasyMetadata()
  statusCode: number;
}
