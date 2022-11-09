import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2RuleBoostAction
/** 
 * A boost action to apply to results matching condition specified above.
**/
export class GoogleCloudRetailV2RuleBoostAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=boost" })
  boost?: number;

  @Metadata({ data: "json, name=productsFilter" })
  productsFilter?: string;
}
