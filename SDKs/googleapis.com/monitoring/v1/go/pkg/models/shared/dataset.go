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

type DataSet struct {
	LegendTemplate     *string                `json:"legendTemplate"`
	MinAlignmentPeriod *string                `json:"minAlignmentPeriod"`
	PlotType           *DataSetPlotTypeEnum   `json:"plotType"`
	TargetAxis         *DataSetTargetAxisEnum `json:"targetAxis"`
	TimeSeriesQuery    *TimeSeriesQuery       `json:"timeSeriesQuery"`
}
