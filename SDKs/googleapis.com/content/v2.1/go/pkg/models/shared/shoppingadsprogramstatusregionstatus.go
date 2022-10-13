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

type ShoppingAdsProgramStatusRegionStatus struct {
	DisapprovalDate                      *string                                                            `json:"disapprovalDate"`
	EligibilityStatus                    *ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum         `json:"eligibilityStatus"`
	OnboardingIssues                     []string                                                           `json:"onboardingIssues"`
	RegionCodes                          []string                                                           `json:"regionCodes"`
	ReviewEligibilityStatus              *ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum   `json:"reviewEligibilityStatus"`
	ReviewIneligibilityReason            *ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum `json:"reviewIneligibilityReason"`
	ReviewIneligibilityReasonDescription *string                                                            `json:"reviewIneligibilityReasonDescription"`
	ReviewIneligibilityReasonDetails     *ShoppingAdsProgramStatusReviewIneligibilityReasonDetails          `json:"reviewIneligibilityReasonDetails"`
	ReviewIssues                         []string                                                           `json:"reviewIssues"`
}
