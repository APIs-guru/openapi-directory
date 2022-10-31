package shared




type RepricingRuleReportTypeEnum string

const (
    RepricingRuleReportTypeEnumRepricingRuleTypeUnspecified RepricingRuleReportTypeEnum = "REPRICING_RULE_TYPE_UNSPECIFIED"
RepricingRuleReportTypeEnumTypeStatsBased RepricingRuleReportTypeEnum = "TYPE_STATS_BASED"
RepricingRuleReportTypeEnumTypeCogsBased RepricingRuleReportTypeEnum = "TYPE_COGS_BASED"
RepricingRuleReportTypeEnumTypeSalesVolumeBased RepricingRuleReportTypeEnum = "TYPE_SALES_VOLUME_BASED"
RepricingRuleReportTypeEnumTypeCompetitivePrice RepricingRuleReportTypeEnum = "TYPE_COMPETITIVE_PRICE"
)


type RepricingRuleReport struct {
    BuyboxWinningRuleStats *RepricingRuleReportBuyboxWinningRuleStats `json:"buyboxWinningRuleStats,omitempty"`
    Date *Date `json:"date,omitempty"`
    ImpactedProducts []string `json:"impactedProducts,omitempty"`
    InapplicabilityDetails []InapplicabilityDetails `json:"inapplicabilityDetails,omitempty"`
    InapplicableProducts []string `json:"inapplicableProducts,omitempty"`
    OrderItemCount *int32 `json:"orderItemCount,omitempty"`
    RuleID *string `json:"ruleId,omitempty"`
    TotalGmv *PriceAmount `json:"totalGmv,omitempty"`
    Type *RepricingRuleReportTypeEnum `json:"type,omitempty"`
    
}

