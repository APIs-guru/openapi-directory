import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductsApiPatchProduct2Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class ProductsApiPatchProduct2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
