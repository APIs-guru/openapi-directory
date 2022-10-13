package shared

type BasicChartSeriesTargetAxisEnum string

const (
	BasicChartSeriesTargetAxisEnumBasicChartAxisPositionUnspecified BasicChartSeriesTargetAxisEnum = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
	BasicChartSeriesTargetAxisEnumBottomAxis                        BasicChartSeriesTargetAxisEnum = "BOTTOM_AXIS"
	BasicChartSeriesTargetAxisEnumLeftAxis                          BasicChartSeriesTargetAxisEnum = "LEFT_AXIS"
	BasicChartSeriesTargetAxisEnumRightAxis                         BasicChartSeriesTargetAxisEnum = "RIGHT_AXIS"
)

type BasicChartSeriesTypeEnum string

const (
	BasicChartSeriesTypeEnumBasicChartTypeUnspecified BasicChartSeriesTypeEnum = "BASIC_CHART_TYPE_UNSPECIFIED"
	BasicChartSeriesTypeEnumBar                       BasicChartSeriesTypeEnum = "BAR"
	BasicChartSeriesTypeEnumLine                      BasicChartSeriesTypeEnum = "LINE"
	BasicChartSeriesTypeEnumArea                      BasicChartSeriesTypeEnum = "AREA"
	BasicChartSeriesTypeEnumColumn                    BasicChartSeriesTypeEnum = "COLUMN"
	BasicChartSeriesTypeEnumScatter                   BasicChartSeriesTypeEnum = "SCATTER"
	BasicChartSeriesTypeEnumCombo                     BasicChartSeriesTypeEnum = "COMBO"
	BasicChartSeriesTypeEnumSteppedArea               BasicChartSeriesTypeEnum = "STEPPED_AREA"
)

type BasicChartSeries struct {
	Color          *Color                              `json:"color"`
	ColorStyle     *ColorStyle                         `json:"colorStyle"`
	DataLabel      *DataLabel                          `json:"dataLabel"`
	LineStyle      *LineStyle                          `json:"lineStyle"`
	PointStyle     *PointStyle                         `json:"pointStyle"`
	Series         *ChartData                          `json:"series"`
	StyleOverrides []BasicSeriesDataPointStyleOverride `json:"styleOverrides"`
	TargetAxis     *BasicChartSeriesTargetAxisEnum     `json:"targetAxis"`
	Type           *BasicChartSeriesTypeEnum           `json:"type"`
}
