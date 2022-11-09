import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPricingCompetitivePricingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingCompetitivePricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPricingCompetitivePricingHeaders;
}


export class PostPricingCompetitivePricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
