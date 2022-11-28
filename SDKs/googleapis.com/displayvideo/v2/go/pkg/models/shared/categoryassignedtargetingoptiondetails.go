package shared

// CategoryAssignedTargetingOptionDetails
// Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
type CategoryAssignedTargetingOptionDetails struct {
	DisplayName       *string `json:"displayName,omitempty"`
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// CategoryAssignedTargetingOptionDetailsInput
// Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
type CategoryAssignedTargetingOptionDetailsInput struct {
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
