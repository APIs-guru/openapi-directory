package shared

// OperatingSystemAssignedTargetingOptionDetailsInput
// Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
type OperatingSystemAssignedTargetingOptionDetailsInput struct {
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// OperatingSystemAssignedTargetingOptionDetails
// Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
type OperatingSystemAssignedTargetingOptionDetails struct {
	DisplayName       *string `json:"displayName,omitempty"`
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
