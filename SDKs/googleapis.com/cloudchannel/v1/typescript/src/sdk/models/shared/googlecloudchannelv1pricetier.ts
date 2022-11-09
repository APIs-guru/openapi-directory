import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";


// GoogleCloudChannelV1PriceTier
/** 
 * Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.
**/
export class GoogleCloudChannelV1PriceTier extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstResource" })
  firstResource?: number;

  @Metadata({ data: "json, name=lastResource" })
  lastResource?: number;

  @Metadata({ data: "json, name=price" })
  price?: GoogleCloudChannelV1Price;
}
