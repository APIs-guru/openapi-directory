package shared

type RepricingRuleEligibleOfferMatcherMatcherOptionEnum string

const (
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionUnspecified      RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_UNSPECIFIED"
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionCustomFilter     RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_CUSTOM_FILTER"
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionUseFeedAttribute RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_USE_FEED_ATTRIBUTE"
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionAllProducts      RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_ALL_PRODUCTS"
)

// RepricingRuleEligibleOfferMatcher
// Matcher that specifies eligible offers. When the USE_FEED_ATTRIBUTE option is selected, only the repricing_rule_id attribute on the product feed is used to specify offer-rule mapping. When the CUSTOM_FILTER option is selected, only the *_matcher fields are used to filter the offers for offer-rule mapping. If the CUSTOM_FILTER option is selected, an offer needs to satisfy each custom filter matcher to be eligible for a rule. Size limit: the sum of the number of entries in all the matchers should not exceed 20. For example, there can be 15 product ids and 5 brands, but not 10 product ids and 11 brands.
type RepricingRuleEligibleOfferMatcher struct {
	BrandMatcher        *RepricingRuleEligibleOfferMatcherStringMatcher     `json:"brandMatcher,omitempty"`
	ItemGroupIDMatcher  *RepricingRuleEligibleOfferMatcherStringMatcher     `json:"itemGroupIdMatcher,omitempty"`
	MatcherOption       *RepricingRuleEligibleOfferMatcherMatcherOptionEnum `json:"matcherOption,omitempty"`
	OfferIDMatcher      *RepricingRuleEligibleOfferMatcherStringMatcher     `json:"offerIdMatcher,omitempty"`
	SkipWhenOnPromotion *bool                                               `json:"skipWhenOnPromotion,omitempty"`
}
