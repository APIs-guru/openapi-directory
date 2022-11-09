import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdAttachmentsAttachmentIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attachment_id" })
  attachmentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdAttachmentsAttachmentIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdAttachmentsAttachmentIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdAttachmentsAttachmentIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdAttachmentsAttachmentIdJsonQueryParams;
}


export class GetProductsIdAttachmentsAttachmentIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  attachment?: shared.Attachment;

  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
