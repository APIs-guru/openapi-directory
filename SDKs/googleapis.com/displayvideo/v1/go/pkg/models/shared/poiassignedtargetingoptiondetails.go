package shared

type PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum string

const (
	PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_UNSPECIFIED"
	PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles       PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_MILES"
	PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers  PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum = "DISTANCE_UNIT_KILOMETERS"
)

type PoiAssignedTargetingOptionDetails struct {
	DisplayName           *string                                                   `json:"displayName"`
	Latitude              *float64                                                  `json:"latitude"`
	Longitude             *float64                                                  `json:"longitude"`
	ProximityRadiusAmount *float64                                                  `json:"proximityRadiusAmount"`
	ProximityRadiusUnit   *PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum `json:"proximityRadiusUnit"`
	TargetingOptionID     *string                                                   `json:"targetingOptionId"`
}
