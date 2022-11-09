import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExtrasImageAttachmentsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExtrasImageAttachmentsReadPathParams;
}


export class ExtrasImageAttachmentsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageAttachment?: shared.ImageAttachment;

  @Metadata()
  statusCode: number;
}
