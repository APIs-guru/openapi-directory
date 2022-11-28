import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasImageAttachmentsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasImageAttachmentsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImageAttachmentInput;
}


export class ExtrasImageAttachmentsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageAttachment?: shared.ImageAttachment;

  @SpeakeasyMetadata()
  statusCode: number;
}
