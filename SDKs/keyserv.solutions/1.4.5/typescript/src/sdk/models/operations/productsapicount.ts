import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductsApiCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productsApiCount200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
