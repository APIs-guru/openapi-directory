import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExtrasImageAttachmentsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class ExtrasImageAttachmentsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExtrasImageAttachmentsReadPathParams;
}


export class ExtrasImageAttachmentsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageAttachment?: shared.ImageAttachment;

  @SpeakeasyMetadata()
  statusCode: number;
}
