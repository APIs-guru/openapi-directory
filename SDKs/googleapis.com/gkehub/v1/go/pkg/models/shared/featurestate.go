package shared

type FeatureStateCodeEnum string

const (
	FeatureStateCodeEnumCodeUnspecified FeatureStateCodeEnum = "CODE_UNSPECIFIED"
	FeatureStateCodeEnumOk              FeatureStateCodeEnum = "OK"
	FeatureStateCodeEnumWarning         FeatureStateCodeEnum = "WARNING"
	FeatureStateCodeEnumError           FeatureStateCodeEnum = "ERROR"
)

// FeatureState
// FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
type FeatureState struct {
	Code        *FeatureStateCodeEnum `json:"code,omitempty"`
	Description *string               `json:"description,omitempty"`
	UpdateTime  *string               `json:"updateTime,omitempty"`
}
