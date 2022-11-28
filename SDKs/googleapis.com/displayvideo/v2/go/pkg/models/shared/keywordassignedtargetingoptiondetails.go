package shared

// KeywordAssignedTargetingOptionDetails
// Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
type KeywordAssignedTargetingOptionDetails struct {
	Keyword  *string `json:"keyword,omitempty"`
	Negative *bool   `json:"negative,omitempty"`
}
