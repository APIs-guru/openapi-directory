import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPricingPriceElasticityOfDemandHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPricingPriceElasticityOfDemandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPricingPriceElasticityOfDemandHeaders;
}


export class PostPricingPriceElasticityOfDemandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
