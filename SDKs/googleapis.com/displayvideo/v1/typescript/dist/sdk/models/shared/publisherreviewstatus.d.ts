import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PublisherReviewStatusStatusEnum {
    ReviewStatusUnspecified = "REVIEW_STATUS_UNSPECIFIED",
    ReviewStatusApproved = "REVIEW_STATUS_APPROVED",
    ReviewStatusRejected = "REVIEW_STATUS_REJECTED",
    ReviewStatusPending = "REVIEW_STATUS_PENDING"
}
/**
 * Publisher review status for the creative.
**/
export declare class PublisherReviewStatus extends SpeakeasyBase {
    publisherName?: string;
    status?: PublisherReviewStatusStatusEnum;
}
