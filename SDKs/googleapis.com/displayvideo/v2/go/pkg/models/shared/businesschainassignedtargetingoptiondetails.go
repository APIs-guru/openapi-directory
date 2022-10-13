package shared

type BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum string

const (
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_UNSPECIFIED"
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles       BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_MILES"
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers  BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_KILOMETERS"
)

type BusinessChainAssignedTargetingOptionDetails struct {
	DisplayName           *string                                                             `json:"displayName"`
	ProximityRadiusAmount *float64                                                            `json:"proximityRadiusAmount"`
	ProximityRadiusUnit   *BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit"`
	TargetingOptionID     *string                                                             `json:"targetingOptionId"`
}
