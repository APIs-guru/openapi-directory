import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductsApiPatchProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiPatchProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
