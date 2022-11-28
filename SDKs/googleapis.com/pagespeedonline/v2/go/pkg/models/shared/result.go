package shared

type ResultFormattedResultsRuleResultsURLBlocksUrls struct {
	Details []PagespeedAPIFormatStringV2
	Result  *PagespeedAPIFormatStringV2
}

type ResultFormattedResultsRuleResultsURLBlocks struct {
	Header *PagespeedAPIFormatStringV2
	Urls   []ResultFormattedResultsRuleResultsURLBlocksUrls
}

// ResultFormattedResultsRuleResults
// The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
type ResultFormattedResultsRuleResults struct {
	Groups            []string
	LocalizedRuleName *string
	RuleImpact        *float64
	Summary           *PagespeedAPIFormatStringV2
	URLBlocks         []ResultFormattedResultsRuleResultsURLBlocks
}

// ResultFormattedResults
// Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
type ResultFormattedResults struct {
	Locale      *string
	RuleResults map[string]ResultFormattedResultsRuleResults
}

// ResultPageStats
// Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
type ResultPageStats struct {
	CSSResponseBytes        *string
	FlashResponseBytes      *string
	HTMLResponseBytes       *string
	ImageResponseBytes      *string
	JavascriptResponseBytes *string
	NumberCSSResources      *int32
	NumberHosts             *int32
	NumberJsResources       *int32
	NumberResources         *int32
	NumberStaticResources   *int32
	OtherResponseBytes      *string
	TextResponseBytes       *string
	TotalRequestBytes       *string
}

// ResultRuleGroups
// The name of this rule group: one of "SPEED" or "USABILITY".
type ResultRuleGroups struct {
	Score *int32
}

// ResultVersion
// The version of PageSpeed used to generate these results.
type ResultVersion struct {
	Major *int32
	Minor *int32
}

type Result struct {
	CaptchaResult    *string
	FormattedResults *ResultFormattedResults
	ID               *string
	InvalidRules     []string
	Kind             *string
	PageStats        *ResultPageStats
	ResponseCode     *int32
	RuleGroups       map[string]ResultRuleGroups
	Screenshot       *PagespeedAPIImageV2
	Title            *string
	Version          *ResultVersion
}
