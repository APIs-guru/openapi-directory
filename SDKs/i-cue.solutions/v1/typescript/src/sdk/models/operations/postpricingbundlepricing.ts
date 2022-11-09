import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPricingBundlePricingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingBundlePricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPricingBundlePricingHeaders;
}


export class PostPricingBundlePricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
