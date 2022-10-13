package shared

type AdSlotCompatibilityEnum string

const (
	AdSlotCompatibilityEnumDisplay             AdSlotCompatibilityEnum = "DISPLAY"
	AdSlotCompatibilityEnumDisplayInterstitial AdSlotCompatibilityEnum = "DISPLAY_INTERSTITIAL"
	AdSlotCompatibilityEnumApp                 AdSlotCompatibilityEnum = "APP"
	AdSlotCompatibilityEnumAppInterstitial     AdSlotCompatibilityEnum = "APP_INTERSTITIAL"
	AdSlotCompatibilityEnumInStreamVideo       AdSlotCompatibilityEnum = "IN_STREAM_VIDEO"
	AdSlotCompatibilityEnumInStreamAudio       AdSlotCompatibilityEnum = "IN_STREAM_AUDIO"
)

type AdSlotPaymentSourceTypeEnum string

const (
	AdSlotPaymentSourceTypeEnumPlanningPaymentSourceTypeAgencyPaid    AdSlotPaymentSourceTypeEnum = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID"
	AdSlotPaymentSourceTypeEnumPlanningPaymentSourceTypePublisherPaid AdSlotPaymentSourceTypeEnum = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"
)

type AdSlot struct {
	Comment           *string                      `json:"comment"`
	Compatibility     *AdSlotCompatibilityEnum     `json:"compatibility"`
	Height            *string                      `json:"height"`
	LinkedPlacementID *string                      `json:"linkedPlacementId"`
	Name              *string                      `json:"name"`
	PaymentSourceType *AdSlotPaymentSourceTypeEnum `json:"paymentSourceType"`
	Primary           *bool                        `json:"primary"`
	Width             *string                      `json:"width"`
}
