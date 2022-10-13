package shared

type StringTargetingDimensionTargetingModeEnum string

const (
	StringTargetingDimensionTargetingModeEnumTargetingModeUnspecified StringTargetingDimensionTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	StringTargetingDimensionTargetingModeEnumInclusive                StringTargetingDimensionTargetingModeEnum = "INCLUSIVE"
	StringTargetingDimensionTargetingModeEnumExclusive                StringTargetingDimensionTargetingModeEnum = "EXCLUSIVE"
)

type StringTargetingDimension struct {
	TargetingMode *StringTargetingDimensionTargetingModeEnum `json:"targetingMode"`
	Values        []string                                   `json:"values"`
}
