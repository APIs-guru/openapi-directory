package shared

type ReviewStatusInfoApprovalStatusEnum string

const (
	ReviewStatusInfoApprovalStatusEnumApprovalStatusUnspecified         ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_UNSPECIFIED"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusPendingNotServable  ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_PENDING_NOT_SERVABLE"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusPendingServable     ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_PENDING_SERVABLE"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusApprovedServable    ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_APPROVED_SERVABLE"
	ReviewStatusInfoApprovalStatusEnumApprovalStatusRejectedNotServable ReviewStatusInfoApprovalStatusEnum = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE"
)

type ReviewStatusInfoContentAndPolicyReviewStatusEnum string

const (
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusUnspecified ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_UNSPECIFIED"
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusApproved    ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_APPROVED"
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusRejected    ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_REJECTED"
	ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusPending     ReviewStatusInfoContentAndPolicyReviewStatusEnum = "REVIEW_STATUS_PENDING"
)

type ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum string

const (
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusUnspecified ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_UNSPECIFIED"
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusApproved    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_APPROVED"
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusRejected    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_REJECTED"
	ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusPending     ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = "REVIEW_STATUS_PENDING"
)

type ReviewStatusInfo struct {
	ApprovalStatus                     *ReviewStatusInfoApprovalStatusEnum                     `json:"approvalStatus,omitempty"`
	ContentAndPolicyReviewStatus       *ReviewStatusInfoContentAndPolicyReviewStatusEnum       `json:"contentAndPolicyReviewStatus,omitempty"`
	CreativeAndLandingPageReviewStatus *ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum `json:"creativeAndLandingPageReviewStatus,omitempty"`
	ExchangeReviewStatuses             []ExchangeReviewStatus                                  `json:"exchangeReviewStatuses,omitempty"`
	PublisherReviewStatuses            []PublisherReviewStatus                                 `json:"publisherReviewStatuses,omitempty"`
}
