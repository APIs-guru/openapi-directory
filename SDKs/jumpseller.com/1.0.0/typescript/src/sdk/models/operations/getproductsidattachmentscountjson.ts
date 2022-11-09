import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsIdAttachmentsCountJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdAttachmentsCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdAttachmentsCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdAttachmentsCountJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdAttachmentsCountJsonQueryParams;
}


export class GetProductsIdAttachmentsCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
