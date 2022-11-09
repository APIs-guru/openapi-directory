import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPricingCostPlusPricingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingCostPlusPricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPricingCostPlusPricingHeaders;
}


export class PostPricingCostPlusPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
