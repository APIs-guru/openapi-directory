package shared

type ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum string

const (
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_UNSPECIFIED"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall       ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_SMALL"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeMedium      ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_MEDIUM"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeLarge       ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum = "PROXIMITY_RADIUS_RANGE_LARGE"
)

type ProximityLocationListAssignedTargetingOptionDetails struct {
	ProximityLocationListID *string                                                                      `json:"proximityLocationListId"`
	ProximityRadiusRange    *ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum `json:"proximityRadiusRange"`
}
