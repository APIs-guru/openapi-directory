import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPricingBundlePricingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingBundlePricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPricingBundlePricingHeaders;
}


export class PostPricingBundlePricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
