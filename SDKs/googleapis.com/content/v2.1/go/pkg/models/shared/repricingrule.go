package shared

type RepricingRuleTypeEnum string

const (
	RepricingRuleTypeEnumRepricingRuleTypeUnspecified RepricingRuleTypeEnum = "REPRICING_RULE_TYPE_UNSPECIFIED"
	RepricingRuleTypeEnumTypeStatsBased               RepricingRuleTypeEnum = "TYPE_STATS_BASED"
	RepricingRuleTypeEnumTypeCogsBased                RepricingRuleTypeEnum = "TYPE_COGS_BASED"
	RepricingRuleTypeEnumTypeSalesVolumeBased         RepricingRuleTypeEnum = "TYPE_SALES_VOLUME_BASED"
	RepricingRuleTypeEnumTypeCompetitivePrice         RepricingRuleTypeEnum = "TYPE_COMPETITIVE_PRICE"
)

type RepricingRule struct {
	CogsBasedRule        *RepricingRuleCostOfGoodsSaleRule  `json:"cogsBasedRule"`
	CountryCode          *string                            `json:"countryCode"`
	EffectiveTimePeriod  *RepricingRuleEffectiveTime        `json:"effectiveTimePeriod"`
	EligibleOfferMatcher *RepricingRuleEligibleOfferMatcher `json:"eligibleOfferMatcher"`
	LanguageCode         *string                            `json:"languageCode"`
	MerchantID           *string                            `json:"merchantId"`
	Paused               *bool                              `json:"paused"`
	Restriction          *RepricingRuleRestriction          `json:"restriction"`
	RuleID               *string                            `json:"ruleId"`
	StatsBasedRule       *RepricingRuleStatsBasedRule       `json:"statsBasedRule"`
	Title                *string                            `json:"title"`
	Type                 *RepricingRuleTypeEnum             `json:"type"`
}
