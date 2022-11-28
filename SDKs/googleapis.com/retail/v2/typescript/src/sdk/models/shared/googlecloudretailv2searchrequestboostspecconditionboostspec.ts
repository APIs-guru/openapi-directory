import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec
/** 
 * Boost applies to products which match a condition.
**/
export class GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boost" })
  boost?: number;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;
}
