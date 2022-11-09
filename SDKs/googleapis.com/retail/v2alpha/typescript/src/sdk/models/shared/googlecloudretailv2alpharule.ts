import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaRuleBoostAction } from "./googlecloudretailv2alpharuleboostaction";
import { GoogleCloudRetailV2alphaCondition } from "./googlecloudretailv2alphacondition";
import { GoogleCloudRetailV2alphaRuleDoNotAssociateAction } from "./googlecloudretailv2alpharuledonotassociateaction";
import { GoogleCloudRetailV2alphaRuleFilterAction } from "./googlecloudretailv2alpharulefilteraction";
import { GoogleCloudRetailV2alphaRuleIgnoreAction } from "./googlecloudretailv2alpharuleignoreaction";
import { GoogleCloudRetailV2alphaRuleOnewaySynonymsAction } from "./googlecloudretailv2alpharuleonewaysynonymsaction";
import { GoogleCloudRetailV2alphaRuleRedirectAction } from "./googlecloudretailv2alpharuleredirectaction";
import { GoogleCloudRetailV2alphaRuleReplacementAction } from "./googlecloudretailv2alpharulereplacementaction";
import { GoogleCloudRetailV2alphaRuleTwowaySynonymsAction } from "./googlecloudretailv2alpharuletwowaysynonymsaction";


// GoogleCloudRetailV2alphaRule
/** 
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
export class GoogleCloudRetailV2alphaRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=boostAction" })
  boostAction?: GoogleCloudRetailV2alphaRuleBoostAction;

  @Metadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2alphaCondition;

  @Metadata({ data: "json, name=doNotAssociateAction" })
  doNotAssociateAction?: GoogleCloudRetailV2alphaRuleDoNotAssociateAction;

  @Metadata({ data: "json, name=filterAction" })
  filterAction?: GoogleCloudRetailV2alphaRuleFilterAction;

  @Metadata({ data: "json, name=ignoreAction" })
  ignoreAction?: GoogleCloudRetailV2alphaRuleIgnoreAction;

  @Metadata({ data: "json, name=onewaySynonymsAction" })
  onewaySynonymsAction?: GoogleCloudRetailV2alphaRuleOnewaySynonymsAction;

  @Metadata({ data: "json, name=redirectAction" })
  redirectAction?: GoogleCloudRetailV2alphaRuleRedirectAction;

  @Metadata({ data: "json, name=replacementAction" })
  replacementAction?: GoogleCloudRetailV2alphaRuleReplacementAction;

  @Metadata({ data: "json, name=twowaySynonymsAction" })
  twowaySynonymsAction?: GoogleCloudRetailV2alphaRuleTwowaySynonymsAction;
}
