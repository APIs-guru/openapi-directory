package shared




type RepricingRuleEligibleOfferMatcherMatcherOptionEnum string

const (
    RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionUnspecified RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_UNSPECIFIED"
RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionCustomFilter RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_CUSTOM_FILTER"
RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionUseFeedAttribute RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_USE_FEED_ATTRIBUTE"
RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionAllProducts RepricingRuleEligibleOfferMatcherMatcherOptionEnum = "MATCHER_OPTION_ALL_PRODUCTS"
)


type RepricingRuleEligibleOfferMatcher struct {
    BrandMatcher *RepricingRuleEligibleOfferMatcherStringMatcher `json:"brandMatcher,omitempty"`
    ItemGroupIDMatcher *RepricingRuleEligibleOfferMatcherStringMatcher `json:"itemGroupIdMatcher,omitempty"`
    MatcherOption *RepricingRuleEligibleOfferMatcherMatcherOptionEnum `json:"matcherOption,omitempty"`
    OfferIDMatcher *RepricingRuleEligibleOfferMatcherStringMatcher `json:"offerIdMatcher,omitempty"`
    SkipWhenOnPromotion *bool `json:"skipWhenOnPromotion,omitempty"`
    
}

