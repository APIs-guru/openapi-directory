package shared

type WaterfallChartSeries struct {
	CustomSubtotals      []WaterfallChartCustomSubtotal `json:"customSubtotals"`
	Data                 *ChartData                     `json:"data"`
	DataLabel            *DataLabel                     `json:"dataLabel"`
	HideTrailingSubtotal *bool                          `json:"hideTrailingSubtotal"`
	NegativeColumnsStyle *WaterfallChartColumnStyle     `json:"negativeColumnsStyle"`
	PositiveColumnsStyle *WaterfallChartColumnStyle     `json:"positiveColumnsStyle"`
	SubtotalColumnsStyle *WaterfallChartColumnStyle     `json:"subtotalColumnsStyle"`
}
