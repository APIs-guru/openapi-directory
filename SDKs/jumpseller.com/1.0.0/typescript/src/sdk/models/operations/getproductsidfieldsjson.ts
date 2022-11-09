import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductsIdFieldsJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetProductsIdFieldsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetProductsIdFieldsJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductsIdFieldsJsonPathParams;

  @Metadata()
  queryParams: GetProductsIdFieldsJsonQueryParams;
}


export class GetProductsIdFieldsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: any;

  @Metadata({ elemType: shared.ProductCustomField })
  productCustomFields?: shared.ProductCustomField[];

  @Metadata()
  statusCode: number;
}
