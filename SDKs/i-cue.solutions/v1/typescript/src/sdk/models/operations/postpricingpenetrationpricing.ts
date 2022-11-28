import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPricingPenetrationPricingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingPenetrationPricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPricingPenetrationPricingHeaders;
}


export class PostPricingPenetrationPricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
