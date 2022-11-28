package shared

type BasicChartAxisPositionEnum string

const (
	BasicChartAxisPositionEnumBasicChartAxisPositionUnspecified BasicChartAxisPositionEnum = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
	BasicChartAxisPositionEnumBottomAxis                        BasicChartAxisPositionEnum = "BOTTOM_AXIS"
	BasicChartAxisPositionEnumLeftAxis                          BasicChartAxisPositionEnum = "LEFT_AXIS"
	BasicChartAxisPositionEnumRightAxis                         BasicChartAxisPositionEnum = "RIGHT_AXIS"
)

// BasicChartAxis
// An axis of the chart. A chart may not have more than one axis per axis position.
type BasicChartAxis struct {
	Format            *TextFormat                 `json:"format,omitempty"`
	Position          *BasicChartAxisPositionEnum `json:"position,omitempty"`
	Title             *string                     `json:"title,omitempty"`
	TitleTextPosition *TextPosition               `json:"titleTextPosition,omitempty"`
	ViewWindowOptions *ChartAxisViewWindowOptions `json:"viewWindowOptions,omitempty"`
}
