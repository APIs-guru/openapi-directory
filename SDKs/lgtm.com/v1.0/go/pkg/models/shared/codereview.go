package shared

type CodeReviewStatusEnum string

const (
	CodeReviewStatusEnumPending CodeReviewStatusEnum = "pending"
	CodeReviewStatusEnumFailure CodeReviewStatusEnum = "failure"
	CodeReviewStatusEnumSuccess CodeReviewStatusEnum = "success"
)

type CodeReview struct {
	ID            *string               `json:"id"`
	Languages     []CodereviewLanguages `json:"languages"`
	ResultsURL    *string               `json:"results-url"`
	Status        *CodeReviewStatusEnum `json:"status"`
	StatusMessage *string               `json:"status-message"`
}
