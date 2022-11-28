import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPricingDecoyPricingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingDecoyPricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPricingDecoyPricingHeaders;
}


export class PostPricingDecoyPricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
