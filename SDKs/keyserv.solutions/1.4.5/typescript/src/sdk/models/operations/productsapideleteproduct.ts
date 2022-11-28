import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductsApiDeleteProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class ProductsApiDeleteProductHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey: string;
}


export class ProductsApiDeleteProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductsApiDeleteProductPathParams;

  @SpeakeasyMetadata()
  headers: ProductsApiDeleteProductHeaders;
}


export class ProductsApiDeleteProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
