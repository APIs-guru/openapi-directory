import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPricingOddPricingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingOddPricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPricingOddPricingHeaders;
}


export class PostPricingOddPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
