import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAdsHomeservicesLocalservicesV1AggregatorInfo
/** 
 * Conatiner for aggregator specific information if lead is for an aggregator GLS account.
**/
export class GoogleAdsHomeservicesLocalservicesV1AggregatorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregatorProviderId" })
  aggregatorProviderId?: string;
}
