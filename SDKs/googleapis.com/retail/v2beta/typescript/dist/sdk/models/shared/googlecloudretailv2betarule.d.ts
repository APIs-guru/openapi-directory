import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaRuleBoostAction } from "./googlecloudretailv2betaruleboostaction";
import { GoogleCloudRetailV2betaCondition } from "./googlecloudretailv2betacondition";
import { GoogleCloudRetailV2betaRuleDoNotAssociateAction } from "./googlecloudretailv2betaruledonotassociateaction";
import { GoogleCloudRetailV2betaRuleFilterAction } from "./googlecloudretailv2betarulefilteraction";
import { GoogleCloudRetailV2betaRuleIgnoreAction } from "./googlecloudretailv2betaruleignoreaction";
import { GoogleCloudRetailV2betaRuleOnewaySynonymsAction } from "./googlecloudretailv2betaruleonewaysynonymsaction";
import { GoogleCloudRetailV2betaRuleRedirectAction } from "./googlecloudretailv2betaruleredirectaction";
import { GoogleCloudRetailV2betaRuleReplacementAction } from "./googlecloudretailv2betarulereplacementaction";
import { GoogleCloudRetailV2betaRuleTwowaySynonymsAction } from "./googlecloudretailv2betaruletwowaysynonymsaction";
/**
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
export declare class GoogleCloudRetailV2betaRule extends SpeakeasyBase {
    boostAction?: GoogleCloudRetailV2betaRuleBoostAction;
    condition?: GoogleCloudRetailV2betaCondition;
    doNotAssociateAction?: GoogleCloudRetailV2betaRuleDoNotAssociateAction;
    filterAction?: GoogleCloudRetailV2betaRuleFilterAction;
    ignoreAction?: GoogleCloudRetailV2betaRuleIgnoreAction;
    onewaySynonymsAction?: GoogleCloudRetailV2betaRuleOnewaySynonymsAction;
    redirectAction?: GoogleCloudRetailV2betaRuleRedirectAction;
    replacementAction?: GoogleCloudRetailV2betaRuleReplacementAction;
    twowaySynonymsAction?: GoogleCloudRetailV2betaRuleTwowaySynonymsAction;
}
