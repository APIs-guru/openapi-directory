package shared

type RepricingProductReportTypeEnum string

const (
	RepricingProductReportTypeEnumRepricingRuleTypeUnspecified RepricingProductReportTypeEnum = "REPRICING_RULE_TYPE_UNSPECIFIED"
	RepricingProductReportTypeEnumTypeStatsBased               RepricingProductReportTypeEnum = "TYPE_STATS_BASED"
	RepricingProductReportTypeEnumTypeCogsBased                RepricingProductReportTypeEnum = "TYPE_COGS_BASED"
	RepricingProductReportTypeEnumTypeSalesVolumeBased         RepricingProductReportTypeEnum = "TYPE_SALES_VOLUME_BASED"
	RepricingProductReportTypeEnumTypeCompetitivePrice         RepricingProductReportTypeEnum = "TYPE_COMPETITIVE_PRICE"
)

// RepricingProductReport
// Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.
type RepricingProductReport struct {
	ApplicationCount          *string                                          `json:"applicationCount,omitempty"`
	BuyboxWinningProductStats *RepricingProductReportBuyboxWinningProductStats `json:"buyboxWinningProductStats,omitempty"`
	Date                      *Date                                            `json:"date,omitempty"`
	HighWatermark             *PriceAmount                                     `json:"highWatermark,omitempty"`
	InapplicabilityDetails    []InapplicabilityDetails                         `json:"inapplicabilityDetails,omitempty"`
	LowWatermark              *PriceAmount                                     `json:"lowWatermark,omitempty"`
	OrderItemCount            *int32                                           `json:"orderItemCount,omitempty"`
	RuleIds                   []string                                         `json:"ruleIds,omitempty"`
	TotalGmv                  *PriceAmount                                     `json:"totalGmv,omitempty"`
	Type                      *RepricingProductReportTypeEnum                  `json:"type,omitempty"`
}
