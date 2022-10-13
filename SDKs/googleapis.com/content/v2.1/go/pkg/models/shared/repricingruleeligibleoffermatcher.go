package shared

type RepricingRuleEligibleOfferMatcherMatcherOptionEnum string

const (
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionUnspecified      RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_UNSPECIFIED"
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionCustomFilter     RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_CUSTOM_FILTER"
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionUseFeedAttribute RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_USE_FEED_ATTRIBUTE"
	RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionAllProducts      RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_ALL_PRODUCTS"
)

type RepricingRuleEligibleOfferMatcher struct {
	BrandMatcher        *RepricingRuleEligibleOfferMatcherStringMatcher     `json:"brandMatcher"`
	ItemGroupIDMatcher  *RepricingRuleEligibleOfferMatcherStringMatcher     `json:"itemGroupIdMatcher"`
	MatcherOption       *RepricingRuleEligibleOfferMatcherMatcherOptionEnum `json:"matcherOption"`
	OfferIDMatcher      *RepricingRuleEligibleOfferMatcherStringMatcher     `json:"offerIdMatcher"`
	SkipWhenOnPromotion *bool                                               `json:"skipWhenOnPromotion"`
}
