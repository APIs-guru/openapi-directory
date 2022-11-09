import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaRuleBoostAction
/** 
 * A boost action to apply to results matching condition specified above.
**/
export class GoogleCloudRetailV2betaRuleBoostAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=productsFilter" })
  productsFilter?: string;
}
