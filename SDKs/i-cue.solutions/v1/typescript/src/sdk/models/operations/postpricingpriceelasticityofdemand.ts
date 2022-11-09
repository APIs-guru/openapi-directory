import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPricingPriceElasticityOfDemandHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingPriceElasticityOfDemandRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPricingPriceElasticityOfDemandHeaders;
}


export class PostPricingPriceElasticityOfDemandResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
