import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaRuleBoostAction } from "./googlecloudretailv2betaruleboostaction";
import { GoogleCloudRetailV2betaCondition } from "./googlecloudretailv2betacondition";
import { GoogleCloudRetailV2betaRuleDoNotAssociateAction } from "./googlecloudretailv2betaruledonotassociateaction";
import { GoogleCloudRetailV2betaRuleFilterAction } from "./googlecloudretailv2betarulefilteraction";
import { GoogleCloudRetailV2betaRuleIgnoreAction } from "./googlecloudretailv2betaruleignoreaction";
import { GoogleCloudRetailV2betaRuleOnewaySynonymsAction } from "./googlecloudretailv2betaruleonewaysynonymsaction";
import { GoogleCloudRetailV2betaRuleRedirectAction } from "./googlecloudretailv2betaruleredirectaction";
import { GoogleCloudRetailV2betaRuleReplacementAction } from "./googlecloudretailv2betarulereplacementaction";
import { GoogleCloudRetailV2betaRuleTwowaySynonymsAction } from "./googlecloudretailv2betaruletwowaysynonymsaction";



// GoogleCloudRetailV2betaRule
/** 
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
export class GoogleCloudRetailV2betaRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boostAction" })
  boostAction?: GoogleCloudRetailV2betaRuleBoostAction;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2betaCondition;

  @SpeakeasyMetadata({ data: "json, name=doNotAssociateAction" })
  doNotAssociateAction?: GoogleCloudRetailV2betaRuleDoNotAssociateAction;

  @SpeakeasyMetadata({ data: "json, name=filterAction" })
  filterAction?: GoogleCloudRetailV2betaRuleFilterAction;

  @SpeakeasyMetadata({ data: "json, name=ignoreAction" })
  ignoreAction?: GoogleCloudRetailV2betaRuleIgnoreAction;

  @SpeakeasyMetadata({ data: "json, name=onewaySynonymsAction" })
  onewaySynonymsAction?: GoogleCloudRetailV2betaRuleOnewaySynonymsAction;

  @SpeakeasyMetadata({ data: "json, name=redirectAction" })
  redirectAction?: GoogleCloudRetailV2betaRuleRedirectAction;

  @SpeakeasyMetadata({ data: "json, name=replacementAction" })
  replacementAction?: GoogleCloudRetailV2betaRuleReplacementAction;

  @SpeakeasyMetadata({ data: "json, name=twowaySynonymsAction" })
  twowaySynonymsAction?: GoogleCloudRetailV2betaRuleTwowaySynonymsAction;
}
