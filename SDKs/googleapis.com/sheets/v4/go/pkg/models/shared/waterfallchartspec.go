package shared




type WaterfallChartSpecStackedTypeEnum string

const (
    WaterfallChartSpecStackedTypeEnumWaterfallStackedTypeUnspecified WaterfallChartSpecStackedTypeEnum = "WATERFALL_STACKED_TYPE_UNSPECIFIED"
WaterfallChartSpecStackedTypeEnumStacked WaterfallChartSpecStackedTypeEnum = "STACKED"
WaterfallChartSpecStackedTypeEnumSequential WaterfallChartSpecStackedTypeEnum = "SEQUENTIAL"
)


type WaterfallChartSpec struct {
    ConnectorLineStyle *LineStyle `json:"connectorLineStyle,omitempty"`
    Domain *WaterfallChartDomain `json:"domain,omitempty"`
    FirstValueIsTotal *bool `json:"firstValueIsTotal,omitempty"`
    HideConnectorLines *bool `json:"hideConnectorLines,omitempty"`
    Series []WaterfallChartSeries `json:"series,omitempty"`
    StackedType *WaterfallChartSpecStackedTypeEnum `json:"stackedType,omitempty"`
    TotalDataLabel *DataLabel `json:"totalDataLabel,omitempty"`
    
}

