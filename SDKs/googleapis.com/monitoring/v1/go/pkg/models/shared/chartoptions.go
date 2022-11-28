package shared

type ChartOptionsModeEnum string

const (
	ChartOptionsModeEnumModeUnspecified ChartOptionsModeEnum = "MODE_UNSPECIFIED"
	ChartOptionsModeEnumColor           ChartOptionsModeEnum = "COLOR"
	ChartOptionsModeEnumXRay            ChartOptionsModeEnum = "X_RAY"
	ChartOptionsModeEnumStats           ChartOptionsModeEnum = "STATS"
)

// ChartOptions
// Options to control visual rendering of a chart.
type ChartOptions struct {
	Mode *ChartOptionsModeEnum `json:"mode,omitempty"`
}
