package shared

type ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum string

const (
	ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnumStateUnspecified ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = "STATE_UNSPECIFIED"
	ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnumApproved         ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = "APPROVED"
	ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnumDisapproved      ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = "DISAPPROVED"
	ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnumWarning          ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = "WARNING"
	ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnumUnderReview      ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = "UNDER_REVIEW"
	ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnumPendingReview    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = "PENDING_REVIEW"
	ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnumOnboarding       ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = "ONBOARDING"
)

type ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum string

const (
	ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnumReviewEligibilityUnspecified ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum = "REVIEW_ELIGIBILITY_UNSPECIFIED"
	ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnumEligible                     ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum = "ELIGIBLE"
	ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnumIneligible                   ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum = "INELIGIBLE"
)

type ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum string

const (
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumReviewIneligibilityReasonUnspecified ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumOnboardingIssues                     ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "ONBOARDING_ISSUES"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumNotEnoughOffers                      ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "NOT_ENOUGH_OFFERS"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumInCooldownPeriod                     ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "IN_COOLDOWN_PERIOD"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumAlreadyUnderReview                   ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "ALREADY_UNDER_REVIEW"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumNoReviewRequired                     ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "NO_REVIEW_REQUIRED"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumWillBeReviewedAutomatically          ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "WILL_BE_REVIEWED_AUTOMATICALLY"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumIsRetired                            ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "IS_RETIRED"
	ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnumAlreadyReviewed                      ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "ALREADY_REVIEWED"
)

// ShoppingAdsProgramStatusRegionStatus
// Status of program and region.
type ShoppingAdsProgramStatusRegionStatus struct {
	DisapprovalDate                      *string                                                            `json:"disapprovalDate,omitempty"`
	EligibilityStatus                    *ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum         `json:"eligibilityStatus,omitempty"`
	OnboardingIssues                     []string                                                           `json:"onboardingIssues,omitempty"`
	RegionCodes                          []string                                                           `json:"regionCodes,omitempty"`
	ReviewEligibilityStatus              *ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum   `json:"reviewEligibilityStatus,omitempty"`
	ReviewIneligibilityReason            *ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum `json:"reviewIneligibilityReason,omitempty"`
	ReviewIneligibilityReasonDescription *string                                                            `json:"reviewIneligibilityReasonDescription,omitempty"`
	ReviewIneligibilityReasonDetails     *ShoppingAdsProgramStatusReviewIneligibilityReasonDetails          `json:"reviewIneligibilityReasonDetails,omitempty"`
	ReviewIssues                         []string                                                           `json:"reviewIssues,omitempty"`
}
