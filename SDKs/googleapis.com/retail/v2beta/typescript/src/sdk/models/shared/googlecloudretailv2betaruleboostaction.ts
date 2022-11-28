import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRuleBoostAction
/** 
 * A boost action to apply to results matching condition specified above.
**/
export class GoogleCloudRetailV2betaRuleBoostAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boost" })
  boost?: number;

  @SpeakeasyMetadata({ data: "json, name=productsFilter" })
  productsFilter?: string;
}
