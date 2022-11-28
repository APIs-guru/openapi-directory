package shared

type PartnerRevenueModelMarkupTypeEnum string

const (
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeUnspecified          PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED"
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeCpm                  PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM"
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeMediaCostMarkup      PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP"
	PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeTotalMediaCostMarkup PartnerRevenueModelMarkupTypeEnum = "PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP"
)

// PartnerRevenueModel
// Settings that control how partner revenue is calculated.
type PartnerRevenueModel struct {
	MarkupAmount *string                            `json:"markupAmount,omitempty"`
	MarkupType   *PartnerRevenueModelMarkupTypeEnum `json:"markupType,omitempty"`
}
