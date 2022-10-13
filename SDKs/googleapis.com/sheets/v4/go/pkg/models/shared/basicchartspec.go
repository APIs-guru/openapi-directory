package shared

type BasicChartSpecChartTypeEnum string

const (
	BasicChartSpecChartTypeEnumBasicChartTypeUnspecified BasicChartSpecChartTypeEnum = "BASIC_CHART_TYPE_UNSPECIFIED"
	BasicChartSpecChartTypeEnumBar                       BasicChartSpecChartTypeEnum = "BAR"
	BasicChartSpecChartTypeEnumLine                      BasicChartSpecChartTypeEnum = "LINE"
	BasicChartSpecChartTypeEnumArea                      BasicChartSpecChartTypeEnum = "AREA"
	BasicChartSpecChartTypeEnumColumn                    BasicChartSpecChartTypeEnum = "COLUMN"
	BasicChartSpecChartTypeEnumScatter                   BasicChartSpecChartTypeEnum = "SCATTER"
	BasicChartSpecChartTypeEnumCombo                     BasicChartSpecChartTypeEnum = "COMBO"
	BasicChartSpecChartTypeEnumSteppedArea               BasicChartSpecChartTypeEnum = "STEPPED_AREA"
)

type BasicChartSpecCompareModeEnum string

const (
	BasicChartSpecCompareModeEnumBasicChartCompareModeUnspecified BasicChartSpecCompareModeEnum = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED"
	BasicChartSpecCompareModeEnumDatum                            BasicChartSpecCompareModeEnum = "DATUM"
	BasicChartSpecCompareModeEnumCategory                         BasicChartSpecCompareModeEnum = "CATEGORY"
)

type BasicChartSpecLegendPositionEnum string

const (
	BasicChartSpecLegendPositionEnumBasicChartLegendPositionUnspecified BasicChartSpecLegendPositionEnum = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED"
	BasicChartSpecLegendPositionEnumBottomLegend                        BasicChartSpecLegendPositionEnum = "BOTTOM_LEGEND"
	BasicChartSpecLegendPositionEnumLeftLegend                          BasicChartSpecLegendPositionEnum = "LEFT_LEGEND"
	BasicChartSpecLegendPositionEnumRightLegend                         BasicChartSpecLegendPositionEnum = "RIGHT_LEGEND"
	BasicChartSpecLegendPositionEnumTopLegend                           BasicChartSpecLegendPositionEnum = "TOP_LEGEND"
	BasicChartSpecLegendPositionEnumNoLegend                            BasicChartSpecLegendPositionEnum = "NO_LEGEND"
)

type BasicChartSpecStackedTypeEnum string

const (
	BasicChartSpecStackedTypeEnumBasicChartStackedTypeUnspecified BasicChartSpecStackedTypeEnum = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED"
	BasicChartSpecStackedTypeEnumNotStacked                       BasicChartSpecStackedTypeEnum = "NOT_STACKED"
	BasicChartSpecStackedTypeEnumStacked                          BasicChartSpecStackedTypeEnum = "STACKED"
	BasicChartSpecStackedTypeEnumPercentStacked                   BasicChartSpecStackedTypeEnum = "PERCENT_STACKED"
)

type BasicChartSpec struct {
	Axis             []BasicChartAxis                  `json:"axis"`
	ChartType        *BasicChartSpecChartTypeEnum      `json:"chartType"`
	CompareMode      *BasicChartSpecCompareModeEnum    `json:"compareMode"`
	Domains          []BasicChartDomain                `json:"domains"`
	HeaderCount      *int32                            `json:"headerCount"`
	InterpolateNulls *bool                             `json:"interpolateNulls"`
	LegendPosition   *BasicChartSpecLegendPositionEnum `json:"legendPosition"`
	LineSmoothing    *bool                             `json:"lineSmoothing"`
	Series           []BasicChartSeries                `json:"series"`
	StackedType      *BasicChartSpecStackedTypeEnum    `json:"stackedType"`
	ThreeDimensional *bool                             `json:"threeDimensional"`
	TotalDataLabel   *DataLabel                        `json:"totalDataLabel"`
}
