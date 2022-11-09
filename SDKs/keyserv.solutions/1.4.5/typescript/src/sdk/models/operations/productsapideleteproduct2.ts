import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsApiDeleteProduct2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class ProductsApiDeleteProduct2Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class ProductsApiDeleteProduct2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductsApiDeleteProduct2PathParams;

  @Metadata()
  headers: ProductsApiDeleteProduct2Headers;
}


export class ProductsApiDeleteProduct2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
