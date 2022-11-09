import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepricingRuleCostOfGoodsSaleRule } from "./repricingrulecostofgoodssalerule";
import { RepricingRuleEffectiveTime } from "./repricingruleeffectivetime";
import { RepricingRuleEligibleOfferMatcher } from "./repricingruleeligibleoffermatcher";
import { RepricingRuleRestriction } from "./repricingrulerestriction";
import { RepricingRuleStatsBasedRule } from "./repricingrulestatsbasedrule";

export enum RepricingRuleTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED"
,    TypeStatsBased = "TYPE_STATS_BASED"
,    TypeCogsBased = "TYPE_COGS_BASED"
,    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED"
,    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}


// RepricingRule
/** 
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
**/
export class RepricingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=cogsBasedRule" })
  cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=effectiveTimePeriod" })
  effectiveTimePeriod?: RepricingRuleEffectiveTime;

  @Metadata({ data: "json, name=eligibleOfferMatcher" })
  eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=paused" })
  paused?: boolean;

  @Metadata({ data: "json, name=restriction" })
  restriction?: RepricingRuleRestriction;

  @Metadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @Metadata({ data: "json, name=statsBasedRule" })
  statsBasedRule?: RepricingRuleStatsBasedRule;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: RepricingRuleTypeEnum;
}
