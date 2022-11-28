import { SpeakeasyBase } from "../../../internal/utils";
import { FreeListingsProgramStatusReviewIneligibilityReasonDetails } from "./freelistingsprogramstatusreviewineligibilityreasondetails";
export declare enum FreeListingsProgramStatusRegionStatusEligibilityStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    Warning = "WARNING",
    UnderReview = "UNDER_REVIEW",
    PendingReview = "PENDING_REVIEW",
    Onboarding = "ONBOARDING"
}
export declare enum FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum {
    ReviewEligibilityUnspecified = "REVIEW_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}
export declare enum FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum {
    ReviewIneligibilityReasonUnspecified = "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED",
    OnboardingIssues = "ONBOARDING_ISSUES",
    NotEnoughOffers = "NOT_ENOUGH_OFFERS",
    InCooldownPeriod = "IN_COOLDOWN_PERIOD",
    AlreadyUnderReview = "ALREADY_UNDER_REVIEW",
    NoReviewRequired = "NO_REVIEW_REQUIRED",
    WillBeReviewedAutomatically = "WILL_BE_REVIEWED_AUTOMATICALLY",
    IsRetired = "IS_RETIRED",
    AlreadyReviewed = "ALREADY_REVIEWED"
}
/**
 * Status of program and region.
**/
export declare class FreeListingsProgramStatusRegionStatus extends SpeakeasyBase {
    disapprovalDate?: string;
    eligibilityStatus?: FreeListingsProgramStatusRegionStatusEligibilityStatusEnum;
    onboardingIssues?: string[];
    regionCodes?: string[];
    reviewEligibilityStatus?: FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum;
    reviewIneligibilityReason?: FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum;
    reviewIneligibilityReasonDescription?: string;
    reviewIneligibilityReasonDetails?: FreeListingsProgramStatusReviewIneligibilityReasonDetails;
    reviewIssues?: string[];
}
