package shared

type PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum string

const (
	PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_UNSPECIFIED"
	PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles       PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_MILES"
	PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers  PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_KILOMETERS"
)

// PoiAssignedTargetingOptionDetails
// Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
type PoiAssignedTargetingOptionDetails struct {
	DisplayName           *string                                                   `json:"displayName,omitempty"`
	Latitude              *float64                                                  `json:"latitude,omitempty"`
	Longitude             *float64                                                  `json:"longitude,omitempty"`
	ProximityRadiusAmount *float64                                                  `json:"proximityRadiusAmount,omitempty"`
	ProximityRadiusUnit   *PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit,omitempty"`
	TargetingOptionID     *string                                                   `json:"targetingOptionId,omitempty"`
}

// PoiAssignedTargetingOptionDetailsInput
// Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
type PoiAssignedTargetingOptionDetailsInput struct {
	ProximityRadiusAmount *float64                                                  `json:"proximityRadiusAmount,omitempty"`
	ProximityRadiusUnit   *PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit,omitempty"`
	TargetingOptionID     *string                                                   `json:"targetingOptionId,omitempty"`
}
