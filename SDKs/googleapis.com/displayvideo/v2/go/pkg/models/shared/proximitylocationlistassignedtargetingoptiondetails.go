package shared

type ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum string

const (
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "PROXIMITY_RADIUS_UNIT_UNSPECIFIED"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles       ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "PROXIMITY_RADIUS_UNIT_MILES"
	ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers  ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "PROXIMITY_RADIUS_UNIT_KILOMETERS"
)

type ProximityLocationListAssignedTargetingOptionDetails struct {
	ProximityLocationListID *string                                                                     `json:"proximityLocationListId"`
	ProximityRadius         *float64                                                                    `json:"proximityRadius"`
	ProximityRadiusUnit     *ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit"`
}
