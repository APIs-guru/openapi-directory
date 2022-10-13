package shared

type RepricingProductReportTypeEnum string

const (
	RepricingProductReportTypeEnumRepricingRuleTypeUnspecified RepricingProductReportTypeEnum = "REPRICING_RULE_TYPE_UNSPECIFIED"
	RepricingProductReportTypeEnumTypeStatsBased               RepricingProductReportTypeEnum = "TYPE_STATS_BASED"
	RepricingProductReportTypeEnumTypeCogsBased                RepricingProductReportTypeEnum = "TYPE_COGS_BASED"
	RepricingProductReportTypeEnumTypeSalesVolumeBased         RepricingProductReportTypeEnum = "TYPE_SALES_VOLUME_BASED"
	RepricingProductReportTypeEnumTypeCompetitivePrice         RepricingProductReportTypeEnum = "TYPE_COMPETITIVE_PRICE"
)

type RepricingProductReport struct {
	ApplicationCount          *string                                          `json:"applicationCount"`
	BuyboxWinningProductStats *RepricingProductReportBuyboxWinningProductStats `json:"buyboxWinningProductStats"`
	Date                      *Date                                            `json:"date"`
	HighWatermark             *PriceAmount                                     `json:"highWatermark"`
	InapplicabilityDetails    []InapplicabilityDetails                         `json:"inapplicabilityDetails"`
	LowWatermark              *PriceAmount                                     `json:"lowWatermark"`
	OrderItemCount            *int32                                           `json:"orderItemCount"`
	RuleIds                   []string                                         `json:"ruleIds"`
	TotalGmv                  *PriceAmount                                     `json:"totalGmv"`
	Type                      *RepricingProductReportTypeEnum                  `json:"type"`
}
