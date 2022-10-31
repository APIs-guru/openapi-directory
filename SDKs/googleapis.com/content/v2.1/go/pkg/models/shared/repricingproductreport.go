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
