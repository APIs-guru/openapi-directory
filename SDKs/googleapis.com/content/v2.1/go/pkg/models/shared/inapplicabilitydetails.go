package shared

type InapplicabilityDetailsInapplicableReasonEnum string

const (
	InapplicabilityDetailsInapplicableReasonEnumInapplicableReasonUnspecified   InapplicabilityDetailsInapplicableReasonEnum = "INAPPLICABLE_REASON_UNSPECIFIED"
	InapplicabilityDetailsInapplicableReasonEnumCannotBeatBuyboxWinner          InapplicabilityDetailsInapplicableReasonEnum = "CANNOT_BEAT_BUYBOX_WINNER"
	InapplicabilityDetailsInapplicableReasonEnumAlreadyWinningBuybox            InapplicabilityDetailsInapplicableReasonEnum = "ALREADY_WINNING_BUYBOX"
	InapplicabilityDetailsInapplicableReasonEnumTriumphedOverBySameTypeRule     InapplicabilityDetailsInapplicableReasonEnum = "TRIUMPHED_OVER_BY_SAME_TYPE_RULE"
	InapplicabilityDetailsInapplicableReasonEnumTriumphedOverByOtherRuleOnOffer InapplicabilityDetailsInapplicableReasonEnum = "TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER"
	InapplicabilityDetailsInapplicableReasonEnumRestrictionsNotMet              InapplicabilityDetailsInapplicableReasonEnum = "RESTRICTIONS_NOT_MET"
	InapplicabilityDetailsInapplicableReasonEnumUncategorized                   InapplicabilityDetailsInapplicableReasonEnum = "UNCATEGORIZED"
	InapplicabilityDetailsInapplicableReasonEnumInvalidAutoPriceMin             InapplicabilityDetailsInapplicableReasonEnum = "INVALID_AUTO_PRICE_MIN"
	InapplicabilityDetailsInapplicableReasonEnumInvalidFloorConfig              InapplicabilityDetailsInapplicableReasonEnum = "INVALID_FLOOR_CONFIG"
)

// InapplicabilityDetails
// Map of inapplicability details.
type InapplicabilityDetails struct {
	InapplicableCount  *string                                       `json:"inapplicableCount,omitempty"`
	InapplicableReason *InapplicabilityDetailsInapplicableReasonEnum `json:"inapplicableReason,omitempty"`
}
