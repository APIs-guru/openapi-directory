package shared

type CodeReviewStatusEnum string

const (
	CodeReviewStatusEnumPending CodeReviewStatusEnum = "pending"
	CodeReviewStatusEnumFailure CodeReviewStatusEnum = "failure"
	CodeReviewStatusEnumSuccess CodeReviewStatusEnum = "success"
)

type CodeReview struct {
	ID            *string               `json:"id,omitempty"`
	Languages     []CodereviewLanguages `json:"languages,omitempty"`
	ResultsURL    *string               `json:"results-url,omitempty"`
	Status        *CodeReviewStatusEnum `json:"status,omitempty"`
	StatusMessage *string               `json:"status-message,omitempty"`
}
