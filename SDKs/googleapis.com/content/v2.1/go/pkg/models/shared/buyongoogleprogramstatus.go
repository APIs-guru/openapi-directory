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

type BuyOnGoogleProgramStatus struct {
	BusinessModel                          []BuyOnGoogleProgramStatusBusinessModelEnum     `json:"businessModel"`
	CustomerServicePendingEmail            *string                                         `json:"customerServicePendingEmail"`
	CustomerServicePendingPhoneNumber      *string                                         `json:"customerServicePendingPhoneNumber"`
	CustomerServicePendingPhoneRegionCode  *string                                         `json:"customerServicePendingPhoneRegionCode"`
	CustomerServiceVerifiedEmail           *string                                         `json:"customerServiceVerifiedEmail"`
	CustomerServiceVerifiedPhoneNumber     *string                                         `json:"customerServiceVerifiedPhoneNumber"`
	CustomerServiceVerifiedPhoneRegionCode *string                                         `json:"customerServiceVerifiedPhoneRegionCode"`
	OnlineSalesChannel                     *BuyOnGoogleProgramStatusOnlineSalesChannelEnum `json:"onlineSalesChannel"`
	ParticipationStage                     *BuyOnGoogleProgramStatusParticipationStageEnum `json:"participationStage"`
}
