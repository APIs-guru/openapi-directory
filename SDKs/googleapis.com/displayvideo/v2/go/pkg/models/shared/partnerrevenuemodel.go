package shared

type PartnerRevenueModelMarkupTypeEnum string

const (
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeUnspecified          PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED"
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeCpm                  PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM"
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeMediaCostMarkup      PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP"
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeTotalMediaCostMarkup PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP"
)

type PartnerRevenueModel struct {
	MarkupAmount *string                            `json:"markupAmount"`
	MarkupType   *PartnerRevenueModelMarkupTypeEnum `json:"markupType"`
}
