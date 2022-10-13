package shared

type FeatureStateCodeEnum string

const (
	FeatureStateCodeEnumCodeUnspecified FeatureStateCodeEnum = "CODE_UNSPECIFIED"
	FeatureStateCodeEnumOk              FeatureStateCodeEnum = "OK"
	FeatureStateCodeEnumWarning         FeatureStateCodeEnum = "WARNING"
	FeatureStateCodeEnumError           FeatureStateCodeEnum = "ERROR"
)

type FeatureState struct {
	Code        *FeatureStateCodeEnum `json:"code"`
	Description *string               `json:"description"`
	UpdateTime  *string               `json:"updateTime"`
}
