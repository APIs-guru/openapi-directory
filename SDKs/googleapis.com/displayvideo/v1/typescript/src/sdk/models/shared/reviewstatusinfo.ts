import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExchangeReviewStatus } from "./exchangereviewstatus";
import { PublisherReviewStatus } from "./publisherreviewstatus";


export enum ReviewStatusInfoApprovalStatusEnum {
    ApprovalStatusUnspecified = "APPROVAL_STATUS_UNSPECIFIED",
    ApprovalStatusPendingNotServable = "APPROVAL_STATUS_PENDING_NOT_SERVABLE",
    ApprovalStatusPendingServable = "APPROVAL_STATUS_PENDING_SERVABLE",
    ApprovalStatusApprovedServable = "APPROVAL_STATUS_APPROVED_SERVABLE",
    ApprovalStatusRejectedNotServable = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE"
}

export enum ReviewStatusInfoContentAndPolicyReviewStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED",
    ReviewStatusApproved = "REVIEW_STATUS_APPROVED",
    ReviewStatusRejected = "REVIEW_STATUS_REJECTED",
    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}

export enum ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED",
    ReviewStatusApproved = "REVIEW_STATUS_APPROVED",
    ReviewStatusRejected = "REVIEW_STATUS_REJECTED",
    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}


// ReviewStatusInfo
/** 
 * Review statuses for the creative.
**/
export class ReviewStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalStatus" })
  approvalStatus?: ReviewStatusInfoApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=contentAndPolicyReviewStatus" })
  contentAndPolicyReviewStatus?: ReviewStatusInfoContentAndPolicyReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=creativeAndLandingPageReviewStatus" })
  creativeAndLandingPageReviewStatus?: ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=exchangeReviewStatuses", elemType: ExchangeReviewStatus })
  exchangeReviewStatuses?: ExchangeReviewStatus[];

  @SpeakeasyMetadata({ data: "json, name=publisherReviewStatuses", elemType: PublisherReviewStatus })
  publisherReviewStatuses?: PublisherReviewStatus[];
}
