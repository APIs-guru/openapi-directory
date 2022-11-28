package shared

// LanguageAssignedTargetingOptionDetailsInput
// Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
type LanguageAssignedTargetingOptionDetailsInput struct {
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// LanguageAssignedTargetingOptionDetails
// Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
type LanguageAssignedTargetingOptionDetails struct {
	DisplayName       *string `json:"displayName,omitempty"`
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
