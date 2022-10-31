package shared

type WaterfallChartSeries struct {
	CustomSubtotals      []WaterfallChartCustomSubtotal `json:"customSubtotals,omitempty"`
	Data                 *ChartData                     `json:"data,omitempty"`
	DataLabel            *DataLabel                     `json:"dataLabel,omitempty"`
	HideTrailingSubtotal *bool                          `json:"hideTrailingSubtotal,omitempty"`
	NegativeColumnsStyle *WaterfallChartColumnStyle     `json:"negativeColumnsStyle,omitempty"`
	PositiveColumnsStyle *WaterfallChartColumnStyle     `json:"positiveColumnsStyle,omitempty"`
	SubtotalColumnsStyle *WaterfallChartColumnStyle     `json:"subtotalColumnsStyle,omitempty"`
}
