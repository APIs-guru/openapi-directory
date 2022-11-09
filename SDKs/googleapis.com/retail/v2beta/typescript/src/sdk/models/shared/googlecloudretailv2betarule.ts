import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=boostAction" })
  boostAction?: GoogleCloudRetailV2betaRuleBoostAction;

  @Metadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2betaCondition;

  @Metadata({ data: "json, name=doNotAssociateAction" })
  doNotAssociateAction?: GoogleCloudRetailV2betaRuleDoNotAssociateAction;

  @Metadata({ data: "json, name=filterAction" })
  filterAction?: GoogleCloudRetailV2betaRuleFilterAction;

  @Metadata({ data: "json, name=ignoreAction" })
  ignoreAction?: GoogleCloudRetailV2betaRuleIgnoreAction;

  @Metadata({ data: "json, name=onewaySynonymsAction" })
  onewaySynonymsAction?: GoogleCloudRetailV2betaRuleOnewaySynonymsAction;

  @Metadata({ data: "json, name=redirectAction" })
  redirectAction?: GoogleCloudRetailV2betaRuleRedirectAction;

  @Metadata({ data: "json, name=replacementAction" })
  replacementAction?: GoogleCloudRetailV2betaRuleReplacementAction;

  @Metadata({ data: "json, name=twowaySynonymsAction" })
  twowaySynonymsAction?: GoogleCloudRetailV2betaRuleTwowaySynonymsAction;
}
