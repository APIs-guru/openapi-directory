package shared

type BuyOnGoogleProgramStatusBusinessModelEnum string

const (
	BuyOnGoogleProgramStatusBusinessModelEnumBusinessModelUnspecified BuyOnGoogleProgramStatusBusinessModelEnum = "BUSINESS_MODEL_UNSPECIFIED"
	BuyOnGoogleProgramStatusBusinessModelEnumManufacturer             BuyOnGoogleProgramStatusBusinessModelEnum = "MANUFACTURER"
	BuyOnGoogleProgramStatusBusinessModelEnumImporter                 BuyOnGoogleProgramStatusBusinessModelEnum = "IMPORTER"
	BuyOnGoogleProgramStatusBusinessModelEnumReseller                 BuyOnGoogleProgramStatusBusinessModelEnum = "RESELLER"
	BuyOnGoogleProgramStatusBusinessModelEnumOther                    BuyOnGoogleProgramStatusBusinessModelEnum = "OTHER"
)

type BuyOnGoogleProgramStatusOnlineSalesChannelEnum string

const (
	BuyOnGoogleProgramStatusOnlineSalesChannelEnumOnlineSalesChannelUnspecified BuyOnGoogleProgramStatusOnlineSalesChannelEnum = "ONLINE_SALES_CHANNEL_UNSPECIFIED"
	BuyOnGoogleProgramStatusOnlineSalesChannelEnumGoogleExclusive               BuyOnGoogleProgramStatusOnlineSalesChannelEnum = "GOOGLE_EXCLUSIVE"
	BuyOnGoogleProgramStatusOnlineSalesChannelEnumGoogleAndOtherWebsites        BuyOnGoogleProgramStatusOnlineSalesChannelEnum = "GOOGLE_AND_OTHER_WEBSITES"
)

type BuyOnGoogleProgramStatusParticipationStageEnum string

const (
	BuyOnGoogleProgramStatusParticipationStageEnumProgramParticipationStageUnspecified BuyOnGoogleProgramStatusParticipationStageEnum = "PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED"
	BuyOnGoogleProgramStatusParticipationStageEnumNotEligible                          BuyOnGoogleProgramStatusParticipationStageEnum = "NOT_ELIGIBLE"
	BuyOnGoogleProgramStatusParticipationStageEnumEligible                             BuyOnGoogleProgramStatusParticipationStageEnum = "ELIGIBLE"
	BuyOnGoogleProgramStatusParticipationStageEnumOnboarding                           BuyOnGoogleProgramStatusParticipationStageEnum = "ONBOARDING"
	BuyOnGoogleProgramStatusParticipationStageEnumEligibleForReview                    BuyOnGoogleProgramStatusParticipationStageEnum = "ELIGIBLE_FOR_REVIEW"
	BuyOnGoogleProgramStatusParticipationStageEnumPendingReview                        BuyOnGoogleProgramStatusParticipationStageEnum = "PENDING_REVIEW"
	BuyOnGoogleProgramStatusParticipationStageEnumReviewDisapproved                    BuyOnGoogleProgramStatusParticipationStageEnum = "REVIEW_DISAPPROVED"
	BuyOnGoogleProgramStatusParticipationStageEnumActive                               BuyOnGoogleProgramStatusParticipationStageEnum = "ACTIVE"
	BuyOnGoogleProgramStatusParticipationStageEnumPaused                               BuyOnGoogleProgramStatusParticipationStageEnum = "PAUSED"
)

// BuyOnGoogleProgramStatusInput
// Response message for the GetProgramStatus method.
type BuyOnGoogleProgramStatusInput struct {
	BusinessModel                         []BuyOnGoogleProgramStatusBusinessModelEnum     `json:"businessModel,omitempty"`
	CustomerServicePendingEmail           *string                                         `json:"customerServicePendingEmail,omitempty"`
	CustomerServicePendingPhoneNumber     *string                                         `json:"customerServicePendingPhoneNumber,omitempty"`
	CustomerServicePendingPhoneRegionCode *string                                         `json:"customerServicePendingPhoneRegionCode,omitempty"`
	OnlineSalesChannel                    *BuyOnGoogleProgramStatusOnlineSalesChannelEnum `json:"onlineSalesChannel,omitempty"`
}

// BuyOnGoogleProgramStatus
// Response message for the GetProgramStatus method.
type BuyOnGoogleProgramStatus struct {
	BusinessModel                          []BuyOnGoogleProgramStatusBusinessModelEnum     `json:"businessModel,omitempty"`
	CustomerServicePendingEmail            *string                                         `json:"customerServicePendingEmail,omitempty"`
	CustomerServicePendingPhoneNumber      *string                                         `json:"customerServicePendingPhoneNumber,omitempty"`
	CustomerServicePendingPhoneRegionCode  *string                                         `json:"customerServicePendingPhoneRegionCode,omitempty"`
	CustomerServiceVerifiedEmail           *string                                         `json:"customerServiceVerifiedEmail,omitempty"`
	CustomerServiceVerifiedPhoneNumber     *string                                         `json:"customerServiceVerifiedPhoneNumber,omitempty"`
	CustomerServiceVerifiedPhoneRegionCode *string                                         `json:"customerServiceVerifiedPhoneRegionCode,omitempty"`
	OnlineSalesChannel                     *BuyOnGoogleProgramStatusOnlineSalesChannelEnum `json:"onlineSalesChannel,omitempty"`
	ParticipationStage                     *BuyOnGoogleProgramStatusParticipationStageEnum `json:"participationStage,omitempty"`
}
