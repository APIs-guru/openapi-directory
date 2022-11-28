import { SpeakeasyBase } from "../../../internal/utils";
import { ShoppingAdsProgramStatusReviewIneligibilityReasonDetails } from "./shoppingadsprogramstatusreviewineligibilityreasondetails";
export declare enum ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    Warning = "WARNING",
    UnderReview = "UNDER_REVIEW",
    PendingReview = "PENDING_REVIEW",
    Onboarding = "ONBOARDING"
}
export declare enum ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum {
    ReviewEligibilityUnspecified = "REVIEW_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}
export declare enum ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum {
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
export declare class ShoppingAdsProgramStatusRegionStatus extends SpeakeasyBase {
    disapprovalDate?: string;
    eligibilityStatus?: ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum;
    onboardingIssues?: string[];
    regionCodes?: string[];
    reviewEligibilityStatus?: ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum;
    reviewIneligibilityReason?: ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum;
    reviewIneligibilityReasonDescription?: string;
    reviewIneligibilityReasonDetails?: ShoppingAdsProgramStatusReviewIneligibilityReasonDetails;
    reviewIssues?: string[];
}
