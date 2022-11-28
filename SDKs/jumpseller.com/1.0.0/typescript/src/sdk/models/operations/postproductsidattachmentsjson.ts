import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProductsIdAttachmentsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdAttachmentsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdAttachmentsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostProductsIdAttachmentsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: PostProductsIdAttachmentsJsonQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AttachmentEdit;
}


export class PostProductsIdAttachmentsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachment?: shared.Attachment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
