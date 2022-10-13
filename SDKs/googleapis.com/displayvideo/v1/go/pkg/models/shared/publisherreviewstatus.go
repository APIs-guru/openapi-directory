package shared

type PublisherReviewStatusStatusEnum string

const (
	PublisherReviewStatusStatusEnumReviewStatusUnspecified PublisherReviewStatusStatusEnum = "REVIEW_STATUS_UNSPECIFIED"
	PublisherReviewStatusStatusEnumReviewStatusApproved    PublisherReviewStatusStatusEnum = "REVIEW_STATUS_APPROVED"
	PublisherReviewStatusStatusEnumReviewStatusRejected    PublisherReviewStatusStatusEnum = "REVIEW_STATUS_REJECTED"
	PublisherReviewStatusStatusEnumReviewStatusPending     PublisherReviewStatusStatusEnum = "REVIEW_STATUS_PENDING"
)

type PublisherReviewStatus struct {
	PublisherName *string                          `json:"publisherName"`
	Status        *PublisherReviewStatusStatusEnum `json:"status"`
}
