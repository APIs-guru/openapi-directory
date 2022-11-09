import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductsIdAttachmentsAttachmentIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attachment_id" })
  attachmentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdAttachmentsAttachmentIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsIdAttachmentsAttachmentIdJsonPathParams;

  @Metadata()
  queryParams: DeleteProductsIdAttachmentsAttachmentIdJsonQueryParams;
}


export class DeleteProductsIdAttachmentsAttachmentIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProductsIdAttachmentsAttachmentIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
