import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsApiFindQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class ProductsApiFindRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ProductsApiFindQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productsApiFind200ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
