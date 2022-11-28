import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreeListingsProgramStatusReviewIneligibilityReasonDetails } from "./freelistingsprogramstatusreviewineligibilityreasondetails";


export enum FreeListingsProgramStatusRegionStatusEligibilityStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    Warning = "WARNING",
    UnderReview = "UNDER_REVIEW",
    PendingReview = "PENDING_REVIEW",
    Onboarding = "ONBOARDING"
}

export enum FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum {
    ReviewEligibilityUnspecified = "REVIEW_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}

export enum FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum {
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


// FreeListingsProgramStatusRegionStatus
/** 
 * Status of program and region.
**/
export class FreeListingsProgramStatusRegionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disapprovalDate" })
  disapprovalDate?: string;

  @SpeakeasyMetadata({ data: "json, name=eligibilityStatus" })
  eligibilityStatus?: FreeListingsProgramStatusRegionStatusEligibilityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=onboardingIssues" })
  onboardingIssues?: string[];

  @SpeakeasyMetadata({ data: "json, name=regionCodes" })
  regionCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=reviewEligibilityStatus" })
  reviewEligibilityStatus?: FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReason" })
  reviewIneligibilityReason?: FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReasonDescription" })
  reviewIneligibilityReasonDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReasonDetails" })
  reviewIneligibilityReasonDetails?: FreeListingsProgramStatusReviewIneligibilityReasonDetails;

  @SpeakeasyMetadata({ data: "json, name=reviewIssues" })
  reviewIssues?: string[];
}
