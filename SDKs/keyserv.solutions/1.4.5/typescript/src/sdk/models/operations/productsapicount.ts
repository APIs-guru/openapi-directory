import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsApiCountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productsApiCount200ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
