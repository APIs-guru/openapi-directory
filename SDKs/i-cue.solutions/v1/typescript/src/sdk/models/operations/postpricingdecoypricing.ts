import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPricingDecoyPricingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingDecoyPricingRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPricingDecoyPricingHeaders;
}


export class PostPricingDecoyPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
