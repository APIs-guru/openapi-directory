package shared

// NegativeKeywordListAssignedTargetingOptionDetails
// Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.
type NegativeKeywordListAssignedTargetingOptionDetails struct {
	NegativeKeywordListID *string `json:"negativeKeywordListId,omitempty"`
}
