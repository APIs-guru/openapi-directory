package shared




type AdSlotCompatibilityEnum string

const (
    AdSlotCompatibilityEnumDisplay AdSlotCompatibilityEnum = "DISPLAY"
AdSlotCompatibilityEnumDisplayInterstitial AdSlotCompatibilityEnum = "DISPLAY_INTERSTITIAL"
AdSlotCompatibilityEnumApp AdSlotCompatibilityEnum = "APP"
AdSlotCompatibilityEnumAppInterstitial AdSlotCompatibilityEnum = "APP_INTERSTITIAL"
AdSlotCompatibilityEnumInStreamVideo AdSlotCompatibilityEnum = "IN_STREAM_VIDEO"
AdSlotCompatibilityEnumInStreamAudio AdSlotCompatibilityEnum = "IN_STREAM_AUDIO"
)



type AdSlotPaymentSourceTypeEnum string

const (
    AdSlotPaymentSourceTypeEnumPlanningPaymentSourceTypeAgencyPaid AdSlotPaymentSourceTypeEnum = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID"
AdSlotPaymentSourceTypeEnumPlanningPaymentSourceTypePublisherPaid AdSlotPaymentSourceTypeEnum = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID"
)


type AdSlot struct {
    Comment *string `json:"comment,omitempty"`
    Compatibility *AdSlotCompatibilityEnum `json:"compatibility,omitempty"`
    Height *string `json:"height,omitempty"`
    LinkedPlacementID *string `json:"linkedPlacementId,omitempty"`
    Name *string `json:"name,omitempty"`
    PaymentSourceType *AdSlotPaymentSourceTypeEnum `json:"paymentSourceType,omitempty"`
    Primary *bool `json:"primary,omitempty"`
    Width *string `json:"width,omitempty"`
    
}

