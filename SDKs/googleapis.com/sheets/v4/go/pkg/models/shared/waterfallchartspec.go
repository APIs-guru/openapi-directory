package shared

type WaterfallChartSpecStackedTypeEnum string

const (
	WaterfallChartSpecStackedTypeEnumWaterfallStackedTypeUnspecified WaterfallChartSpecStackedTypeEnum = "WATERFALL_STACKED_TYPE_UNSPECIFIED"
	WaterfallChartSpecStackedTypeEnumStacked                         WaterfallChartSpecStackedTypeEnum = "STACKED"
	WaterfallChartSpecStackedTypeEnumSequential                      WaterfallChartSpecStackedTypeEnum = "SEQUENTIAL"
)

type WaterfallChartSpec struct {
	ConnectorLineStyle *LineStyle                         `json:"connectorLineStyle"`
	Domain             *WaterfallChartDomain              `json:"domain"`
	FirstValueIsTotal  *bool                              `json:"firstValueIsTotal"`
	HideConnectorLines *bool                              `json:"hideConnectorLines"`
	Series             []WaterfallChartSeries             `json:"series"`
	StackedType        *WaterfallChartSpecStackedTypeEnum `json:"stackedType"`
	TotalDataLabel     *DataLabel                         `json:"totalDataLabel"`
}
