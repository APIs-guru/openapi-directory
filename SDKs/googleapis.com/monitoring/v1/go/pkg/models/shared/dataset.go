package shared

type DataSetPlotTypeEnum string

const (
	DataSetPlotTypeEnumPlotTypeUnspecified DataSetPlotTypeEnum = "PLOT_TYPE_UNSPECIFIED"
	DataSetPlotTypeEnumLine                DataSetPlotTypeEnum = "LINE"
	DataSetPlotTypeEnumStackedArea         DataSetPlotTypeEnum = "STACKED_AREA"
	DataSetPlotTypeEnumStackedBar          DataSetPlotTypeEnum = "STACKED_BAR"
	DataSetPlotTypeEnumHeatmap             DataSetPlotTypeEnum = "HEATMAP"
)

type DataSetTargetAxisEnum string

const (
	DataSetTargetAxisEnumTargetAxisUnspecified DataSetTargetAxisEnum = "TARGET_AXIS_UNSPECIFIED"
	DataSetTargetAxisEnumY1                    DataSetTargetAxisEnum = "Y1"
	DataSetTargetAxisEnumY2                    DataSetTargetAxisEnum = "Y2"
)

// DataSet
// Groups a time series query definition with charting options.
type DataSet struct {
	LegendTemplate     *string                `json:"legendTemplate,omitempty"`
	MinAlignmentPeriod *string                `json:"minAlignmentPeriod,omitempty"`
	PlotType           *DataSetPlotTypeEnum   `json:"plotType,omitempty"`
	TargetAxis         *DataSetTargetAxisEnum `json:"targetAxis,omitempty"`
	TimeSeriesQuery    *TimeSeriesQuery       `json:"timeSeriesQuery,omitempty"`
}
