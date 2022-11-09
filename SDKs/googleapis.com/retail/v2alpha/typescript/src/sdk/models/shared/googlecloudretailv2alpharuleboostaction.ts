import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaRuleBoostAction
/** 
 * A boost action to apply to results matching condition specified above.
**/
export class GoogleCloudRetailV2alphaRuleBoostAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=productsFilter" })
  productsFilter?: string;
}
