import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsAfterIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsAfterIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsAfterIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsAfterIdJsonPathParams;

  @Metadata()
  queryParams: GetProductsAfterIdJsonQueryParams;
}


export class GetProductsAfterIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata({ elemType: shared.Product })
  products?: shared.Product[];

  @Metadata()
  statusCode: number;
}
