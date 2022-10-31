package shared




type BasicChartSeriesTargetAxisEnum string

const (
    BasicChartSeriesTargetAxisEnumBasicChartAxisPositionUnspecified BasicChartSeriesTargetAxisEnum = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
BasicChartSeriesTargetAxisEnumBottomAxis BasicChartSeriesTargetAxisEnum = "BOTTOM_AXIS"
BasicChartSeriesTargetAxisEnumLeftAxis BasicChartSeriesTargetAxisEnum = "LEFT_AXIS"
BasicChartSeriesTargetAxisEnumRightAxis BasicChartSeriesTargetAxisEnum = "RIGHT_AXIS"
)



type BasicChartSeriesTypeEnum string

const (
    BasicChartSeriesTypeEnumBasicChartTypeUnspecified BasicChartSeriesTypeEnum = "BASIC_CHART_TYPE_UNSPECIFIED"
BasicChartSeriesTypeEnumBar BasicChartSeriesTypeEnum = "BAR"
BasicChartSeriesTypeEnumLine BasicChartSeriesTypeEnum = "LINE"
BasicChartSeriesTypeEnumArea BasicChartSeriesTypeEnum = "AREA"
BasicChartSeriesTypeEnumColumn BasicChartSeriesTypeEnum = "COLUMN"
BasicChartSeriesTypeEnumScatter BasicChartSeriesTypeEnum = "SCATTER"
BasicChartSeriesTypeEnumCombo BasicChartSeriesTypeEnum = "COMBO"
BasicChartSeriesTypeEnumSteppedArea BasicChartSeriesTypeEnum = "STEPPED_AREA"
)


type BasicChartSeries struct {
    Color *Color `json:"color,omitempty"`
    ColorStyle *ColorStyle `json:"colorStyle,omitempty"`
    DataLabel *DataLabel `json:"dataLabel,omitempty"`
    LineStyle *LineStyle `json:"lineStyle,omitempty"`
    PointStyle *PointStyle `json:"pointStyle,omitempty"`
    Series *ChartData `json:"series,omitempty"`
    StyleOverrides []BasicSeriesDataPointStyleOverride `json:"styleOverrides,omitempty"`
    TargetAxis *BasicChartSeriesTargetAxisEnum `json:"targetAxis,omitempty"`
    Type *BasicChartSeriesTypeEnum `json:"type,omitempty"`
    
}

