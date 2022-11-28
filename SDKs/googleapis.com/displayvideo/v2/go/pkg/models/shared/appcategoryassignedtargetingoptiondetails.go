package shared

// AppCategoryAssignedTargetingOptionDetailsInput
// Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
type AppCategoryAssignedTargetingOptionDetailsInput struct {
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// AppCategoryAssignedTargetingOptionDetails
// Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
type AppCategoryAssignedTargetingOptionDetails struct {
	DisplayName       *string `json:"displayName,omitempty"`
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
