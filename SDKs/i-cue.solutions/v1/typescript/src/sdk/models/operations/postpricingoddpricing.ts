import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPricingOddPricingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingOddPricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPricingOddPricingHeaders;
}


export class PostPricingOddPricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
