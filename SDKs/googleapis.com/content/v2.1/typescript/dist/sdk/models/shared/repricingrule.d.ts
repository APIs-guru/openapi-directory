import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleCostOfGoodsSaleRule } from "./repricingrulecostofgoodssalerule";
import { RepricingRuleEffectiveTime } from "./repricingruleeffectivetime";
import { RepricingRuleEligibleOfferMatcher } from "./repricingruleeligibleoffermatcher";
import { RepricingRuleRestriction } from "./repricingrulerestriction";
import { RepricingRuleStatsBasedRule } from "./repricingrulestatsbasedrule";
export declare enum RepricingRuleTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}
/**
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
**/
export declare class RepricingRule extends SpeakeasyBase {
    cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule;
    countryCode?: string;
    effectiveTimePeriod?: RepricingRuleEffectiveTime;
    eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher;
    languageCode?: string;
    merchantId?: string;
    paused?: boolean;
    restriction?: RepricingRuleRestriction;
    ruleId?: string;
    statsBasedRule?: RepricingRuleStatsBasedRule;
    title?: string;
    type?: RepricingRuleTypeEnum;
}
/**
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
**/
export declare class RepricingRuleInput extends SpeakeasyBase {
    cogsBasedRule?: RepricingRuleCostOfGoodsSaleRule;
    countryCode?: string;
    effectiveTimePeriod?: RepricingRuleEffectiveTime;
    eligibleOfferMatcher?: RepricingRuleEligibleOfferMatcher;
    languageCode?: string;
    paused?: boolean;
    restriction?: RepricingRuleRestriction;
    statsBasedRule?: RepricingRuleStatsBasedRule;
    title?: string;
    type?: RepricingRuleTypeEnum;
}
