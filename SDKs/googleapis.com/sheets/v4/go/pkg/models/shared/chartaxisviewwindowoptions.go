package shared

type ChartAxisViewWindowOptionsViewWindowModeEnum string

const (
	ChartAxisViewWindowOptionsViewWindowModeEnumDefaultViewWindowMode     ChartAxisViewWindowOptionsViewWindowModeEnum = "DEFAULT_VIEW_WINDOW_MODE"
	ChartAxisViewWindowOptionsViewWindowModeEnumViewWindowModeUnsupported ChartAxisViewWindowOptionsViewWindowModeEnum = "VIEW_WINDOW_MODE_UNSUPPORTED"
	ChartAxisViewWindowOptionsViewWindowModeEnumExplicit                  ChartAxisViewWindowOptionsViewWindowModeEnum = "EXPLICIT"
	ChartAxisViewWindowOptionsViewWindowModeEnumPretty                    ChartAxisViewWindowOptionsViewWindowModeEnum = "PRETTY"
)

type ChartAxisViewWindowOptions struct {
	ViewWindowMax  *float64                                      `json:"viewWindowMax"`
	ViewWindowMin  *float64                                      `json:"viewWindowMin"`
	ViewWindowMode *ChartAxisViewWindowOptionsViewWindowModeEnum `json:"viewWindowMode"`
}
