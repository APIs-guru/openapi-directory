package shared

type ChartOptionsModeEnum string

const (
	ChartOptionsModeEnumModeUnspecified ChartOptionsModeEnum = "MODE_UNSPECIFIED"
	ChartOptionsModeEnumColor           ChartOptionsModeEnum = "COLOR"
	ChartOptionsModeEnumXRay            ChartOptionsModeEnum = "X_RAY"
	ChartOptionsModeEnumStats           ChartOptionsModeEnum = "STATS"
)

type ChartOptions struct {
	Mode *ChartOptionsModeEnum `json:"mode,omitempty"`
}
