import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdAttachmentsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdAttachmentsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdAttachmentsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdAttachmentsJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdAttachmentsJsonQueryParams;
}


export class GetProductsIdAttachmentsJsonResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Attachment })
  attachments?: shared.Attachment[];

  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
