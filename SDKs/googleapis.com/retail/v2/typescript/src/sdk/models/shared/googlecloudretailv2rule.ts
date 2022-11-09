import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2RuleBoostAction } from "./googlecloudretailv2ruleboostaction";
import { GoogleCloudRetailV2Condition } from "./googlecloudretailv2condition";
import { GoogleCloudRetailV2RuleDoNotAssociateAction } from "./googlecloudretailv2ruledonotassociateaction";
import { GoogleCloudRetailV2RuleFilterAction } from "./googlecloudretailv2rulefilteraction";
import { GoogleCloudRetailV2RuleIgnoreAction } from "./googlecloudretailv2ruleignoreaction";
import { GoogleCloudRetailV2RuleOnewaySynonymsAction } from "./googlecloudretailv2ruleonewaysynonymsaction";
import { GoogleCloudRetailV2RuleRedirectAction } from "./googlecloudretailv2ruleredirectaction";
import { GoogleCloudRetailV2RuleReplacementAction } from "./googlecloudretailv2rulereplacementaction";
import { GoogleCloudRetailV2RuleTwowaySynonymsAction } from "./googlecloudretailv2ruletwowaysynonymsaction";


// GoogleCloudRetailV2Rule
/** 
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
export class GoogleCloudRetailV2Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=boostAction" })
  boostAction?: GoogleCloudRetailV2RuleBoostAction;

  @Metadata({ data: "json, name=condition" })
  condition?: GoogleCloudRetailV2Condition;

  @Metadata({ data: "json, name=doNotAssociateAction" })
  doNotAssociateAction?: GoogleCloudRetailV2RuleDoNotAssociateAction;

  @Metadata({ data: "json, name=filterAction" })
  filterAction?: GoogleCloudRetailV2RuleFilterAction;

  @Metadata({ data: "json, name=ignoreAction" })
  ignoreAction?: GoogleCloudRetailV2RuleIgnoreAction;

  @Metadata({ data: "json, name=onewaySynonymsAction" })
  onewaySynonymsAction?: GoogleCloudRetailV2RuleOnewaySynonymsAction;

  @Metadata({ data: "json, name=redirectAction" })
  redirectAction?: GoogleCloudRetailV2RuleRedirectAction;

  @Metadata({ data: "json, name=replacementAction" })
  replacementAction?: GoogleCloudRetailV2RuleReplacementAction;

  @Metadata({ data: "json, name=twowaySynonymsAction" })
  twowaySynonymsAction?: GoogleCloudRetailV2RuleTwowaySynonymsAction;
}
