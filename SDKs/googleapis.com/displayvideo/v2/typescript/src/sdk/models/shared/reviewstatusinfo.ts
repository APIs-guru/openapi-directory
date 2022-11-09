import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExchangeReviewStatus } from "./exchangereviewstatus";
import { PublisherReviewStatus } from "./publisherreviewstatus";

export enum ReviewStatusInfoApprovalStatusEnum {
    ApprovalStatusUnspecified = "APPROVAL_STATUS_UNSPECIFIED"
,    ApprovalStatusPendingNotServable = "APPROVAL_STATUS_PENDING_NOT_SERVABLE"
,    ApprovalStatusPendingServable = "APPROVAL_STATUS_PENDING_SERVABLE"
,    ApprovalStatusApprovedServable = "APPROVAL_STATUS_APPROVED_SERVABLE"
,    ApprovalStatusRejectedNotServable = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE"
}

export enum ReviewStatusInfoContentAndPolicyReviewStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED"
,    ReviewStatusApproved = "REVIEW_STATUS_APPROVED"
,    ReviewStatusRejected = "REVIEW_STATUS_REJECTED"
,    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}

export enum ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED"
,    ReviewStatusApproved = "REVIEW_STATUS_APPROVED"
,    ReviewStatusRejected = "REVIEW_STATUS_REJECTED"
,    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}


// ReviewStatusInfo
/** 
 * Review statuses for the creative.
**/
export class ReviewStatusInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalStatus" })
  approvalStatus?: ReviewStatusInfoApprovalStatusEnum;

  @Metadata({ data: "json, name=contentAndPolicyReviewStatus" })
  contentAndPolicyReviewStatus?: ReviewStatusInfoContentAndPolicyReviewStatusEnum;

  @Metadata({ data: "json, name=creativeAndLandingPageReviewStatus" })
  creativeAndLandingPageReviewStatus?: ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;

  @Metadata({ data: "json, name=exchangeReviewStatuses", elemType: shared.ExchangeReviewStatus })
  exchangeReviewStatuses?: ExchangeReviewStatus[];

  @Metadata({ data: "json, name=publisherReviewStatuses", elemType: shared.PublisherReviewStatus })
  publisherReviewStatuses?: PublisherReviewStatus[];
}
