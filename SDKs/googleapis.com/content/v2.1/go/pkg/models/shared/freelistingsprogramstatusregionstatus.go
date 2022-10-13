package shared

type FreeListingsProgramStatusRegionStatusEligibilityStatusEnum string

const (
	FreeListingsProgramStatusRegionStatusEligibilityStatusEnumStateUnspecified FreeListingsProgramStatusRegionStatusEligibilityStatusEnum = "STATE_UNSPECIFIED"
	FreeListingsProgramStatusRegionStatusEligibilityStatusEnumApproved         FreeListingsProgramStatusRegionStatusEligibilityStatusEnum = "APPROVED"
	FreeListingsProgramStatusRegionStatusEligibilityStatusEnumDisapproved      FreeListingsProgramStatusRegionStatusEligibilityStatusEnum = "DISAPPROVED"
	FreeListingsProgramStatusRegionStatusEligibilityStatusEnumWarning          FreeListingsProgramStatusRegionStatusEligibilityStatusEnum = "WARNING"
	FreeListingsProgramStatusRegionStatusEligibilityStatusEnumUnderReview      FreeListingsProgramStatusRegionStatusEligibilityStatusEnum = "UNDER_REVIEW"
	FreeListingsProgramStatusRegionStatusEligibilityStatusEnumPendingReview    FreeListingsProgramStatusRegionStatusEligibilityStatusEnum = "PENDING_REVIEW"
	FreeListingsProgramStatusRegionStatusEligibilityStatusEnumOnboarding       FreeListingsProgramStatusRegionStatusEligibilityStatusEnum = "ONBOARDING"
)

type FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum string

const (
	FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnumReviewEligibilityUnspecified FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum = "REVIEW_ELIGIBILITY_UNSPECIFIED"
	FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnumEligible                     FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum = "ELIGIBLE"
	FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnumIneligible                   FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum = "INELIGIBLE"
)

type FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum string

const (
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumReviewIneligibilityReasonUnspecified FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumOnboardingIssues                     FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "ONBOARDING_ISSUES"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumNotEnoughOffers                      FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "NOT_ENOUGH_OFFERS"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumInCooldownPeriod                     FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "IN_COOLDOWN_PERIOD"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumAlreadyUnderReview                   FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "ALREADY_UNDER_REVIEW"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumNoReviewRequired                     FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "NO_REVIEW_REQUIRED"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumWillBeReviewedAutomatically          FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "WILL_BE_REVIEWED_AUTOMATICALLY"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumIsRetired                            FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "IS_RETIRED"
	FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnumAlreadyReviewed                      FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum = "ALREADY_REVIEWED"
)

type FreeListingsProgramStatusRegionStatus struct {
	DisapprovalDate                      *string                                                             `json:"disapprovalDate"`
	EligibilityStatus                    *FreeListingsProgramStatusRegionStatusEligibilityStatusEnum         `json:"eligibilityStatus"`
	OnboardingIssues                     []string                                                            `json:"onboardingIssues"`
	RegionCodes                          []string                                                            `json:"regionCodes"`
	ReviewEligibilityStatus              *FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum   `json:"reviewEligibilityStatus"`
	ReviewIneligibilityReason            *FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum `json:"reviewIneligibilityReason"`
	ReviewIneligibilityReasonDescription *string                                                             `json:"reviewIneligibilityReasonDescription"`
	ReviewIneligibilityReasonDetails     *FreeListingsProgramStatusReviewIneligibilityReasonDetails          `json:"reviewIneligibilityReasonDetails"`
	ReviewIssues                         []string                                                            `json:"reviewIssues"`
}
