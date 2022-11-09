import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPricingPenetrationPricingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingPenetrationPricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPricingPenetrationPricingHeaders;
}


export class PostPricingPenetrationPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
