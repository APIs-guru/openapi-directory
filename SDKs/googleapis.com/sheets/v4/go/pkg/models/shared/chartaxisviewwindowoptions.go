package shared

type ChartAxisViewWindowOptionsViewWindowModeEnum string

const (
	ChartAxisViewWindowOptionsViewWindowModeEnumDefaultViewWindowMode     ChartAxisViewWindowOptionsViewWindowModeEnum = "DEFAULT_VIEW_WINDOW_MODE"
	ChartAxisViewWindowOptionsViewWindowModeEnumViewWindowModeUnsupported ChartAxisViewWindowOptionsViewWindowModeEnum = "VIEW_WINDOW_MODE_UNSUPPORTED"
	ChartAxisViewWindowOptionsViewWindowModeEnumExplicit                  ChartAxisViewWindowOptionsViewWindowModeEnum = "EXPLICIT"
	ChartAxisViewWindowOptionsViewWindowModeEnumPretty                    ChartAxisViewWindowOptionsViewWindowModeEnum = "PRETTY"
)

// ChartAxisViewWindowOptions
// The options that define a "view window" for a chart (such as the visible values in an axis).
type ChartAxisViewWindowOptions struct {
	ViewWindowMax  *float64                                      `json:"viewWindowMax,omitempty"`
	ViewWindowMin  *float64                                      `json:"viewWindowMin,omitempty"`
	ViewWindowMode *ChartAxisViewWindowOptionsViewWindowModeEnum `json:"viewWindowMode,omitempty"`
}
