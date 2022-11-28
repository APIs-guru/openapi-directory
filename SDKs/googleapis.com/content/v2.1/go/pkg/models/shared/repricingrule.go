package shared

type RepricingRuleTypeEnum string

const (
	RepricingRuleTypeEnumRepricingRuleTypeUnspecified RepricingRuleTypeEnum = "REPRICING_RULE_TYPE_UNSPECIFIED"
	RepricingRuleTypeEnumTypeStatsBased               RepricingRuleTypeEnum = "TYPE_STATS_BASED"
	RepricingRuleTypeEnumTypeCogsBased                RepricingRuleTypeEnum = "TYPE_COGS_BASED"
	RepricingRuleTypeEnumTypeSalesVolumeBased         RepricingRuleTypeEnum = "TYPE_SALES_VOLUME_BASED"
	RepricingRuleTypeEnumTypeCompetitivePrice         RepricingRuleTypeEnum = "TYPE_COMPETITIVE_PRICE"
)

// RepricingRuleInput
// Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
type RepricingRuleInput struct {
	CogsBasedRule        *RepricingRuleCostOfGoodsSaleRule  `json:"cogsBasedRule,omitempty"`
	CountryCode          *string                            `json:"countryCode,omitempty"`
	EffectiveTimePeriod  *RepricingRuleEffectiveTime        `json:"effectiveTimePeriod,omitempty"`
	EligibleOfferMatcher *RepricingRuleEligibleOfferMatcher `json:"eligibleOfferMatcher,omitempty"`
	LanguageCode         *string                            `json:"languageCode,omitempty"`
	Paused               *bool                              `json:"paused,omitempty"`
	Restriction          *RepricingRuleRestriction          `json:"restriction,omitempty"`
	StatsBasedRule       *RepricingRuleStatsBasedRule       `json:"statsBasedRule,omitempty"`
	Title                *string                            `json:"title,omitempty"`
	Type                 *RepricingRuleTypeEnum             `json:"type,omitempty"`
}

// RepricingRule
// Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
type RepricingRule struct {
	CogsBasedRule        *RepricingRuleCostOfGoodsSaleRule  `json:"cogsBasedRule,omitempty"`
	CountryCode          *string                            `json:"countryCode,omitempty"`
	EffectiveTimePeriod  *RepricingRuleEffectiveTime        `json:"effectiveTimePeriod,omitempty"`
	EligibleOfferMatcher *RepricingRuleEligibleOfferMatcher `json:"eligibleOfferMatcher,omitempty"`
	LanguageCode         *string                            `json:"languageCode,omitempty"`
	MerchantID           *string                            `json:"merchantId,omitempty"`
	Paused               *bool                              `json:"paused,omitempty"`
	Restriction          *RepricingRuleRestriction          `json:"restriction,omitempty"`
	RuleID               *string                            `json:"ruleId,omitempty"`
	StatsBasedRule       *RepricingRuleStatsBasedRule       `json:"statsBasedRule,omitempty"`
	Title                *string                            `json:"title,omitempty"`
	Type                 *RepricingRuleTypeEnum             `json:"type,omitempty"`
}
