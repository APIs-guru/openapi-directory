import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShoppingAdsProgramStatusReviewIneligibilityReasonDetails } from "./shoppingadsprogramstatusreviewineligibilityreasondetails";


export enum ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Disapproved = "DISAPPROVED",
    Warning = "WARNING",
    UnderReview = "UNDER_REVIEW",
    PendingReview = "PENDING_REVIEW",
    Onboarding = "ONBOARDING"
}

export enum ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum {
    ReviewEligibilityUnspecified = "REVIEW_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}

export enum ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum {
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


// ShoppingAdsProgramStatusRegionStatus
/** 
 * Status of program and region.
**/
export class ShoppingAdsProgramStatusRegionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disapprovalDate" })
  disapprovalDate?: string;

  @SpeakeasyMetadata({ data: "json, name=eligibilityStatus" })
  eligibilityStatus?: ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=onboardingIssues" })
  onboardingIssues?: string[];

  @SpeakeasyMetadata({ data: "json, name=regionCodes" })
  regionCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=reviewEligibilityStatus" })
  reviewEligibilityStatus?: ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReason" })
  reviewIneligibilityReason?: ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReasonDescription" })
  reviewIneligibilityReasonDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReasonDetails" })
  reviewIneligibilityReasonDetails?: ShoppingAdsProgramStatusReviewIneligibilityReasonDetails;

  @SpeakeasyMetadata({ data: "json, name=reviewIssues" })
  reviewIssues?: string[];
}
