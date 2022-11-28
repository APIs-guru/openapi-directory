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

// BasicChartSpec
// The specification for a basic chart. See BasicChartType for the list of charts this supports.
type BasicChartSpec struct {
	Axis             []BasicChartAxis                  `json:"axis,omitempty"`
	ChartType        *BasicChartSpecChartTypeEnum      `json:"chartType,omitempty"`
	CompareMode      *BasicChartSpecCompareModeEnum    `json:"compareMode,omitempty"`
	Domains          []BasicChartDomain                `json:"domains,omitempty"`
	HeaderCount      *int32                            `json:"headerCount,omitempty"`
	InterpolateNulls *bool                             `json:"interpolateNulls,omitempty"`
	LegendPosition   *BasicChartSpecLegendPositionEnum `json:"legendPosition,omitempty"`
	LineSmoothing    *bool                             `json:"lineSmoothing,omitempty"`
	Series           []BasicChartSeries                `json:"series,omitempty"`
	StackedType      *BasicChartSpecStackedTypeEnum    `json:"stackedType,omitempty"`
	ThreeDimensional *bool                             `json:"threeDimensional,omitempty"`
	TotalDataLabel   *DataLabel                        `json:"totalDataLabel,omitempty"`
}
