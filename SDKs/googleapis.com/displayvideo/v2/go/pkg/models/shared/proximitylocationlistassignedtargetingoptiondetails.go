package shared

type ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum string

const (
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "PROXIMITY_RADIUS_UNIT_UNSPECIFIED"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles       ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "PROXIMITY_RADIUS_UNIT_MILES"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers  ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "PROXIMITY_RADIUS_UNIT_KILOMETERS"
)

// ProximityLocationListAssignedTargetingOptionDetails
// Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
type ProximityLocationListAssignedTargetingOptionDetails struct {
	ProximityLocationListID *string                                                                     `json:"proximityLocationListId,omitempty"`
	ProximityRadius         *float64                                                                    `json:"proximityRadius,omitempty"`
	ProximityRadiusUnit     *ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit,omitempty"`
}
