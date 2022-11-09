import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublisherReviewStatusStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED"
,    ReviewStatusApproved = "REVIEW_STATUS_APPROVED"
,    ReviewStatusRejected = "REVIEW_STATUS_REJECTED"
,    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}


// PublisherReviewStatus
/** 
 * Publisher review status for the creative.
**/
export class PublisherReviewStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=publisherName" })
  publisherName?: string;

  @Metadata({ data: "json, name=status" })
  status?: PublisherReviewStatusStatusEnum;
}
