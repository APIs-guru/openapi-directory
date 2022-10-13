package shared

type GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum string

const (
	GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnumReasonUnspecified    GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum = "REASON_UNSPECIFIED"
	GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnumPendingTosAcceptance GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum = "PENDING_TOS_ACCEPTANCE"
	GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnumSkuNotEligible       GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum = "SKU_NOT_ELIGIBLE"
	GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnumSkuSuspended         GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum = "SKU_SUSPENDED"
)

type GoogleCloudChannelV1TransferEligibility struct {
	Description         *string                                                         `json:"description"`
	IneligibilityReason *GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum `json:"ineligibilityReason"`
	IsEligible          *bool                                                           `json:"isEligible"`
}
