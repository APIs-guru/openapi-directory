import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductsApiFindQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class ProductsApiFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProductsApiFindQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productsApiFind200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
