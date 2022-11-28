import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaRuleBoostAction } from "./googlecloudretailv2alpharuleboostaction";
import { GoogleCloudRetailV2alphaCondition } from "./googlecloudretailv2alphacondition";
import { GoogleCloudRetailV2alphaRuleDoNotAssociateAction } from "./googlecloudretailv2alpharuledonotassociateaction";
import { GoogleCloudRetailV2alphaRuleFilterAction } from "./googlecloudretailv2alpharulefilteraction";
import { GoogleCloudRetailV2alphaRuleIgnoreAction } from "./googlecloudretailv2alpharuleignoreaction";
import { GoogleCloudRetailV2alphaRuleOnewaySynonymsAction } from "./googlecloudretailv2alpharuleonewaysynonymsaction";
import { GoogleCloudRetailV2alphaRuleRedirectAction } from "./googlecloudretailv2alpharuleredirectaction";
import { GoogleCloudRetailV2alphaRuleReplacementAction } from "./googlecloudretailv2alpharulereplacementaction";
import { GoogleCloudRetailV2alphaRuleTwowaySynonymsAction } from "./googlecloudretailv2alpharuletwowaysynonymsaction";
/**
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
export declare class GoogleCloudRetailV2alphaRule extends SpeakeasyBase {
    boostAction?: GoogleCloudRetailV2alphaRuleBoostAction;
    condition?: GoogleCloudRetailV2alphaCondition;
    doNotAssociateAction?: GoogleCloudRetailV2alphaRuleDoNotAssociateAction;
    filterAction?: GoogleCloudRetailV2alphaRuleFilterAction;
    ignoreAction?: GoogleCloudRetailV2alphaRuleIgnoreAction;
    onewaySynonymsAction?: GoogleCloudRetailV2alphaRuleOnewaySynonymsAction;
    redirectAction?: GoogleCloudRetailV2alphaRuleRedirectAction;
    replacementAction?: GoogleCloudRetailV2alphaRuleReplacementAction;
    twowaySynonymsAction?: GoogleCloudRetailV2alphaRuleTwowaySynonymsAction;
}
