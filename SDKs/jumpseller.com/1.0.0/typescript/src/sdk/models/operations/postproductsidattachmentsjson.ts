import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostProductsIdAttachmentsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostProductsIdAttachmentsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class PostProductsIdAttachmentsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostProductsIdAttachmentsJsonPathParams;

  @Metadata()
  queryParams: PostProductsIdAttachmentsJsonQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AttachmentEdit;
}


export class PostProductsIdAttachmentsJsonResponse extends SpeakeasyBase {
  @Metadata()
  attachment?: shared.Attachment;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
