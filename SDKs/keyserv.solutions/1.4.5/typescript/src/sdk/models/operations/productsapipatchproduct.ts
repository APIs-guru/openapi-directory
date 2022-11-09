import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsApiPatchProductRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiPatchProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
