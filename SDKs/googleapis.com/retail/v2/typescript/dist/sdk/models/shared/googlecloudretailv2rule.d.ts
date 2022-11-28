import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2RuleBoostAction } from "./googlecloudretailv2ruleboostaction";
import { GoogleCloudRetailV2Condition } from "./googlecloudretailv2condition";
import { GoogleCloudRetailV2RuleDoNotAssociateAction } from "./googlecloudretailv2ruledonotassociateaction";
import { GoogleCloudRetailV2RuleFilterAction } from "./googlecloudretailv2rulefilteraction";
import { GoogleCloudRetailV2RuleIgnoreAction } from "./googlecloudretailv2ruleignoreaction";
import { GoogleCloudRetailV2RuleOnewaySynonymsAction } from "./googlecloudretailv2ruleonewaysynonymsaction";
import { GoogleCloudRetailV2RuleRedirectAction } from "./googlecloudretailv2ruleredirectaction";
import { GoogleCloudRetailV2RuleReplacementAction } from "./googlecloudretailv2rulereplacementaction";
import { GoogleCloudRetailV2RuleTwowaySynonymsAction } from "./googlecloudretailv2ruletwowaysynonymsaction";
/**
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
export declare class GoogleCloudRetailV2Rule extends SpeakeasyBase {
    boostAction?: GoogleCloudRetailV2RuleBoostAction;
    condition?: GoogleCloudRetailV2Condition;
    doNotAssociateAction?: GoogleCloudRetailV2RuleDoNotAssociateAction;
    filterAction?: GoogleCloudRetailV2RuleFilterAction;
    ignoreAction?: GoogleCloudRetailV2RuleIgnoreAction;
    onewaySynonymsAction?: GoogleCloudRetailV2RuleOnewaySynonymsAction;
    redirectAction?: GoogleCloudRetailV2RuleRedirectAction;
    replacementAction?: GoogleCloudRetailV2RuleReplacementAction;
    twowaySynonymsAction?: GoogleCloudRetailV2RuleTwowaySynonymsAction;
}
