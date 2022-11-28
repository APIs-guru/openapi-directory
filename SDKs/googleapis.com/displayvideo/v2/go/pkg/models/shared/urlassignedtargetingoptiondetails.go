package shared

// URLAssignedTargetingOptionDetails
// Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
type URLAssignedTargetingOptionDetails struct {
	Negative *bool   `json:"negative,omitempty"`
	URL      *string `json:"url,omitempty"`
}
