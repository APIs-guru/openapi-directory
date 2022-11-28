package shared

// RegionalLocationListAssignedTargetingOptionDetails
// Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.
type RegionalLocationListAssignedTargetingOptionDetails struct {
	Negative               *bool   `json:"negative,omitempty"`
	RegionalLocationListID *string `json:"regionalLocationListId,omitempty"`
}
