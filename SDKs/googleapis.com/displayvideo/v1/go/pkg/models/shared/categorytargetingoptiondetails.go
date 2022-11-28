package shared

// CategoryTargetingOptionDetails
// Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.
type CategoryTargetingOptionDetails struct {
	DisplayName *string `json:"displayName,omitempty"`
}
