package shared

type ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum string

const (
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_UNSPECIFIED"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall       ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_SMALL"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeMedium      ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_MEDIUM"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeLarge       ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_LARGE"
)

// ProximityLocationListAssignedTargetingOptionDetails
// Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
type ProximityLocationListAssignedTargetingOptionDetails struct {
	ProximityLocationListID *string                                                                      `json:"proximityLocationListId,omitempty"`
	ProximityRadiusRange    *ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum `json:"proximityRadiusRange,omitempty"`
}
