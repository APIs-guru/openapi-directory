package shared

type BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum string

const (
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_UNSPECIFIED"
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles       BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_MILES"
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers  BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_KILOMETERS"
)

type BusinessChainAssignedTargetingOptionDetails struct {
	DisplayName           *string                                                             `json:"displayName,omitempty"`
	ProximityRadiusAmount *float64                                                            `json:"proximityRadiusAmount,omitempty"`
	ProximityRadiusUnit   *BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit,omitempty"`
	TargetingOptionID     *string                                                             `json:"targetingOptionId,omitempty"`
}
