import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductsApiDeleteProduct2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class ProductsApiDeleteProduct2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class ProductsApiDeleteProduct2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductsApiDeleteProduct2PathParams;

  @SpeakeasyMetadata()
  headers: ProductsApiDeleteProduct2Headers;
}


export class ProductsApiDeleteProduct2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
