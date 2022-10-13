package shared

type RepricingRuleReportTypeEnum string

const (
	RepricingRuleReportTypeEnumRepricingRuleTypeUnspecified RepricingRuleReportTypeEnum = "REPRICING_RULE_TYPE_UNSPECIFIED"
	RepricingRuleReportTypeEnumTypeStatsBased               RepricingRuleReportTypeEnum = "TYPE_STATS_BASED"
	RepricingRuleReportTypeEnumTypeCogsBased                RepricingRuleReportTypeEnum = "TYPE_COGS_BASED"
	RepricingRuleReportTypeEnumTypeSalesVolumeBased         RepricingRuleReportTypeEnum = "TYPE_SALES_VOLUME_BASED"
	RepricingRuleReportTypeEnumTypeCompetitivePrice         RepricingRuleReportTypeEnum = "TYPE_COMPETITIVE_PRICE"
)

type RepricingRuleReport struct {
	BuyboxWinningRuleStats *RepricingRuleReportBuyboxWinningRuleStats `json:"buyboxWinningRuleStats"`
	Date                   *Date                                      `json:"date"`
	ImpactedProducts       []string                                   `json:"impactedProducts"`
	InapplicabilityDetails []InapplicabilityDetails                   `json:"inapplicabilityDetails"`
	InapplicableProducts   []string                                   `json:"inapplicableProducts"`
	OrderItemCount         *int32                                     `json:"orderItemCount"`
	RuleID                 *string                                    `json:"ruleId"`
	TotalGmv               *PriceAmount                               `json:"totalGmv"`
	Type                   *RepricingRuleReportTypeEnum               `json:"type"`
}
