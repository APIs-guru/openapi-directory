import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPricingCompetitivePricingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingCompetitivePricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPricingCompetitivePricingHeaders;
}


export class PostPricingCompetitivePricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
