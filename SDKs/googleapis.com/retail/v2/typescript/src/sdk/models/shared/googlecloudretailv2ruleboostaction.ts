import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RuleBoostAction
/** 
 * A boost action to apply to results matching condition specified above.
**/
export class GoogleCloudRetailV2RuleBoostAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boost" })
  boost?: number;

  @SpeakeasyMetadata({ data: "json, name=productsFilter" })
  productsFilter?: string;
}
