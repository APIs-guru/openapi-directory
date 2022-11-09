import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec
/** 
 * Boost applies to products which match a condition.
**/
export class GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=condition" })
  condition?: string;
}
