package shared

type BasicChartAxisPositionEnum string

const (
	BasicChartAxisPositionEnumBasicChartAxisPositionUnspecified BasicChartAxisPositionEnum = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
	BasicChartAxisPositionEnumBottomAxis                        BasicChartAxisPositionEnum = "BOTTOM_AXIS"
	BasicChartAxisPositionEnumLeftAxis                          BasicChartAxisPositionEnum = "LEFT_AXIS"
	BasicChartAxisPositionEnumRightAxis                         BasicChartAxisPositionEnum = "RIGHT_AXIS"
)

type BasicChartAxis struct {
	Format            *TextFormat                 `json:"format"`
	Position          *BasicChartAxisPositionEnum `json:"position"`
	Title             *string                     `json:"title"`
	TitleTextPosition *TextPosition               `json:"titleTextPosition"`
	ViewWindowOptions *ChartAxisViewWindowOptions `json:"viewWindowOptions"`
}
