import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec
/** 
 * Boost applies to products which match a condition.
**/
export class GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boost" })
  boost?: number;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;
}
