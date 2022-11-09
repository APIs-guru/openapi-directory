import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=digital_product_id" })
  digitalProductId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductsIdDigitalProductsDigitalProductIdJsonPathParams;

  @Metadata()
  queryParams: DeleteProductsIdDigitalProductsDigitalProductIdJsonQueryParams;
}


export class DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProductsIdDigitalProductsDigitalProductIdJson200ApplicationJsonString?: string;

  @Metadata()
  notFound?: any;

  @Metadata()
  statusCode: number;
}
