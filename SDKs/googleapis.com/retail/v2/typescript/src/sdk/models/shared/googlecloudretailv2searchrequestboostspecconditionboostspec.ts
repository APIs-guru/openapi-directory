import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec
/** 
 * Boost applies to products which match a condition.
**/
export class GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=condition" })
  condition?: string;
}
