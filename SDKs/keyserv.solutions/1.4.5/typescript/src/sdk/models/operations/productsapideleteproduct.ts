import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsApiDeleteProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class ProductsApiDeleteProductHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class ProductsApiDeleteProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductsApiDeleteProductPathParams;

  @Metadata()
  headers: ProductsApiDeleteProductHeaders;
}


export class ProductsApiDeleteProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
