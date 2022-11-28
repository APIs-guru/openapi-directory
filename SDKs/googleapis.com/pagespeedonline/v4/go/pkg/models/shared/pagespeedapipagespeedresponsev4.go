package shared

type PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocksUrls struct {
	Details []PagespeedAPIFormatStringV4
	Result  *PagespeedAPIFormatStringV4
}

type PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocks struct {
	Header *PagespeedAPIFormatStringV4
	Urls   []PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocksUrls
}

// PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults
// The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
type PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults struct {
	Beta              *bool
	Groups            []string
	LocalizedRuleName *string
	RuleImpact        *float64
	Summary           *PagespeedAPIFormatStringV4
	URLBlocks         []PagespeedAPIPagespeedResponseV4FormattedResultsRuleResultsURLBlocks
}

// PagespeedAPIPagespeedResponseV4FormattedResults
// Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
type PagespeedAPIPagespeedResponseV4FormattedResults struct {
	Locale      *string
	RuleResults map[string]PagespeedAPIPagespeedResponseV4FormattedResultsRuleResults
}

type PagespeedAPIPagespeedResponseV4LoadingExperienceMetricsDistributions struct {
	Max        *int32
	Min        *int32
	Proportion *float64
}

// PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics
// The type of the metric.
type PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics struct {
	Category      *string
	Distributions []PagespeedAPIPagespeedResponseV4LoadingExperienceMetricsDistributions
	Median        *int32
}

// PagespeedAPIPagespeedResponseV4LoadingExperience
// Metrics of end users' page loading experience.
type PagespeedAPIPagespeedResponseV4LoadingExperience struct {
	ID              *string
	InitialURL      *string
	Metrics         map[string]PagespeedAPIPagespeedResponseV4LoadingExperienceMetrics
	OverallCategory *string
}

// PagespeedAPIPagespeedResponseV4PageStats
// Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
type PagespeedAPIPagespeedResponseV4PageStats struct {
	Cms                                  *string
	CSSResponseBytes                     *string
	FlashResponseBytes                   *string
	HTMLResponseBytes                    *string
	ImageResponseBytes                   *string
	JavascriptResponseBytes              *string
	NumRenderBlockingRoundTrips          *int32
	NumTotalRoundTrips                   *int32
	NumberCSSResources                   *int32
	NumberHosts                          *int32
	NumberJsResources                    *int32
	NumberResources                      *int32
	NumberRobotedResources               *int32
	NumberStaticResources                *int32
	NumberTransientFetchFailureResources *int32
	OtherResponseBytes                   *string
	OverTheWireResponseBytes             *string
	RobotedUrls                          []string
	TextResponseBytes                    *string
	TotalRequestBytes                    *string
	TransientFetchFailureUrls            []string
}

// PagespeedAPIPagespeedResponseV4RuleGroups
// The name of this rule group: one of "SPEED", "USABILITY", or "SECURITY".
type PagespeedAPIPagespeedResponseV4RuleGroups struct {
	Pass  *bool
	Score *int32
}

// PagespeedAPIPagespeedResponseV4Version
// The version of PageSpeed used to generate these results.
type PagespeedAPIPagespeedResponseV4Version struct {
	Major *int32
	Minor *int32
}

type PagespeedAPIPagespeedResponseV4 struct {
	CaptchaResult     *string
	FormattedResults  *PagespeedAPIPagespeedResponseV4FormattedResults
	ID                *string
	InvalidRules      []string
	Kind              *string
	LoadingExperience *PagespeedAPIPagespeedResponseV4LoadingExperience
	PageStats         *PagespeedAPIPagespeedResponseV4PageStats
	ResponseCode      *int32
	RuleGroups        map[string]PagespeedAPIPagespeedResponseV4RuleGroups
	Screenshot        *PagespeedAPIImageV4
	Snapshots         []PagespeedAPIImageV4
	Title             *string
	Version           *PagespeedAPIPagespeedResponseV4Version
}
