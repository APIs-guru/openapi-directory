import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PublisherReviewStatusStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED",
    ReviewStatusApproved = "REVIEW_STATUS_APPROVED",
    ReviewStatusRejected = "REVIEW_STATUS_REJECTED",
    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}


// PublisherReviewStatus
/** 
 * Publisher review status for the creative.
**/
export class PublisherReviewStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publisherName" })
  publisherName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PublisherReviewStatusStatusEnum;
}
