import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasImageAttachmentsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasImageAttachmentsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImageAttachment;
}


export class ExtrasImageAttachmentsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageAttachment?: shared.ImageAttachment;

  @Metadata()
  statusCode: number;
}
