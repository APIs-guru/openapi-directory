import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleCostOfGoodsSaleRule } from "./repricingrulecostofgoodssalerule";
import { RepricingRuleEffectiveTime } from "./repricingruleeffectivetime";
import { RepricingRuleEligibleOfferMatcher } from "./repricingruleeligibleoffermatcher";
import { RepricingRuleRestriction } from "./repricingrulerestriction";
import { RepricingRuleStatsBasedRule } from "./repricingrulestatsbasedrule";


export enum RepricingRuleTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}


// RepricingRule
/** 
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
**/
export class RepricingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cogsBasedRule" })
  cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveTimePeriod" })
  effectiveTimePeriod?: RepricingRuleEffectiveTime;

  @SpeakeasyMetadata({ data: "json, name=eligibleOfferMatcher" })
  eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=paused" })
  paused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restriction" })
  restriction?: RepricingRuleRestriction;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=statsBasedRule" })
  statsBasedRule?: RepricingRuleStatsBasedRule;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RepricingRuleTypeEnum;
}


// RepricingRuleInput
/** 
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
**/
export class RepricingRuleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cogsBasedRule" })
  cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveTimePeriod" })
  effectiveTimePeriod?: RepricingRuleEffectiveTime;

  @SpeakeasyMetadata({ data: "json, name=eligibleOfferMatcher" })
  eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=paused" })
  paused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restriction" })
  restriction?: RepricingRuleRestriction;

  @SpeakeasyMetadata({ data: "json, name=statsBasedRule" })
  statsBasedRule?: RepricingRuleStatsBasedRule;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RepricingRuleTypeEnum;
}
