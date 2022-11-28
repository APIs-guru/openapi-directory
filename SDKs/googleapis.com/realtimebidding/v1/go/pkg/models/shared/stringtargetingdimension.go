package shared

type StringTargetingDimensionTargetingModeEnum string

const (
	StringTargetingDimensionTargetingModeEnumTargetingModeUnspecified StringTargetingDimensionTargetingModeEnum = "TARGETING_MODE_UNSPECIFIED"
	StringTargetingDimensionTargetingModeEnumInclusive                StringTargetingDimensionTargetingModeEnum = "INCLUSIVE"
	StringTargetingDimensionTargetingModeEnumExclusive                StringTargetingDimensionTargetingModeEnum = "EXCLUSIVE"
)

// StringTargetingDimension
// Generic targeting with string values used in app, website and publisher targeting.
type StringTargetingDimension struct {
	TargetingMode *StringTargetingDimensionTargetingModeEnum `json:"targetingMode,omitempty"`
	Values        []string                                   `json:"values,omitempty"`
}
