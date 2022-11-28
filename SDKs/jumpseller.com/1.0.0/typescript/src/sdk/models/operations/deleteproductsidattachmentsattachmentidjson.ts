import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProductsIdAttachmentsAttachmentIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attachment_id" })
  attachmentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdAttachmentsAttachmentIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductsIdAttachmentsAttachmentIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams;
}


export class DeleteProductsIdAttachmentsAttachmentIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProductsIdAttachmentsAttachmentIdJson200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
