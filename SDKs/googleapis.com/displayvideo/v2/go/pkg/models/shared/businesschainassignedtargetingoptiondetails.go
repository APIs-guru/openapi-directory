package shared

type BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum string

const (
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_UNSPECIFIED"
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles       BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_MILES"
	BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers  BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_KILOMETERS"
)

// BusinessChainAssignedTargetingOptionDetails
// Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
type BusinessChainAssignedTargetingOptionDetails struct {
	DisplayName           *string                                                             `json:"displayName,omitempty"`
	ProximityRadiusAmount *float64                                                            `json:"proximityRadiusAmount,omitempty"`
	ProximityRadiusUnit   *BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit,omitempty"`
	TargetingOptionID     *string                                                             `json:"targetingOptionId,omitempty"`
}

// BusinessChainAssignedTargetingOptionDetailsInput
// Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
type BusinessChainAssignedTargetingOptionDetailsInput struct {
	ProximityRadiusAmount *float64                                                            `json:"proximityRadiusAmount,omitempty"`
	ProximityRadiusUnit   *BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit,omitempty"`
	TargetingOptionID     *string                                                             `json:"targetingOptionId,omitempty"`
}
