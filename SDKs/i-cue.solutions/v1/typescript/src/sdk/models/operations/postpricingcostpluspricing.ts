import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPricingCostPlusPricingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingCostPlusPricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPricingCostPlusPricingHeaders;
}


export class PostPricingCostPlusPricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
