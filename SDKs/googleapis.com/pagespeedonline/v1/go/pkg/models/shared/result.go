package shared

type ResultFormattedResultsRuleResultsURLBlocksHeaderArgs struct {
	Type  *string
	Value *string
}

// ResultFormattedResultsRuleResultsURLBlocksHeader
// Heading to be displayed with the list of URLs.
type ResultFormattedResultsRuleResultsURLBlocksHeader struct {
	Args   []ResultFormattedResultsRuleResultsURLBlocksHeaderArgs
	Format *string
}

type ResultFormattedResultsRuleResultsURLBlocksUrlsDetailsArgs struct {
	Type  *string
	Value *string
}

type ResultFormattedResultsRuleResultsURLBlocksUrlsDetails struct {
	Args   []ResultFormattedResultsRuleResultsURLBlocksUrlsDetailsArgs
	Format *string
}

type ResultFormattedResultsRuleResultsURLBlocksUrlsResultArgs struct {
	Type  *string
	Value *string
}

// ResultFormattedResultsRuleResultsURLBlocksUrlsResult
// A format string that gives information about the URL, and a list of arguments for that format string.
type ResultFormattedResultsRuleResultsURLBlocksUrlsResult struct {
	Args   []ResultFormattedResultsRuleResultsURLBlocksUrlsResultArgs
	Format *string
}

type ResultFormattedResultsRuleResultsURLBlocksUrls struct {
	Details []ResultFormattedResultsRuleResultsURLBlocksUrlsDetails
	Result  *ResultFormattedResultsRuleResultsURLBlocksUrlsResult
}

type ResultFormattedResultsRuleResultsURLBlocks struct {
	Header *ResultFormattedResultsRuleResultsURLBlocksHeader
	Urls   []ResultFormattedResultsRuleResultsURLBlocksUrls
}

// ResultFormattedResultsRuleResults
// The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
type ResultFormattedResultsRuleResults struct {
	LocalizedRuleName *string
	RuleImpact        *float64
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

// ResultScreenshot
// Base64-encoded screenshot of the page that was analyzed.
type ResultScreenshot struct {
	Data     *string
	Height   *int32
	MimeType *string
	Width    *int32
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
	Score            *int32
	Screenshot       *ResultScreenshot
	Title            *string
	Version          *ResultVersion
}
